/* =============================================
   DICCIONARIO DE TRADUCCIONES
   ============================================= */
const translations = {
    es: {
        'site.title': 'Movie Squad PR | Promoción Cinematográfica',
        'nav.services': 'Servicios',
        'nav.interviews': 'Contenido',
        'nav.cta': 'Cotizar',
        'hero.title1': 'Tu obra',
        'hero.title2': 'merece ser vista',
        'hero.desc': 'Promociona tu proyecto cinematográfico con reseñas profundas y entrevistas exclusivas. En Movie Squad PR ayudamos a cineastas, directores y productores a dar visibilidad a sus historias.',
        'hero.cta_primary': 'Solicitar cotización',
        'hero.cta_secondary': 'WhatsApp',
        'services.tag': 'Lo que hacemos',
        'services.title': 'Damos voz a tu obra',
        'services.desc': 'Reseñas críticas, entrevistas de autor y estrategia digital.',
        'services.s1.title': 'Reseñas de Cine',
        'services.s1.desc': 'Críticas profundas y honestas que destacan las fortalezas artísticas y técnicas de tu obra.',
        'services.s2.title': 'Entrevistas Exclusivas',
        'services.s2.desc': 'Charlas íntimas con tu equipo creativo para conectar con la audiencia.',
        'services.s3.title': 'Promoción Digital',
        'services.s3.desc': 'Estrategia de contenido para redes sociales y plataformas de streaming.',
        'interviews.tag': 'Nuestro trabajo',
        'interviews.title': 'Contenido destacado',
        'interviews.desc': 'Mira algunos de los proyectos que hemos promocionado.',
        'contact.tag': 'Hablemos',
        'contact.title': '¿Listo para promocionar tu proyecto?',
        'contact.desc': 'Cuéntanos sobre tu obra cinematográfica y te responderemos con una estrategia personalizada en menos de 24 horas.',
        'contact.perk1': 'Consulta gratuita',
        'contact.perk2': 'Estrategia a medida',
        'contact.perk3': 'Sin compromiso',
        'contact.form_title': 'Solicitud de cotización',
        'contact.form_sub': 'Cuéntanos sobre tu obra.',
        'contact.f_name': 'Nombre',
        'contact.f_email': 'Email',
        'contact.f_phone': 'Teléfono',
        'contact.f_service': 'Servicio',
        'contact.f_service_opt1': 'Selecciona',
        'contact.f_service_opt2': 'Reseña de Película',
        'contact.f_service_opt3': 'Entrevista Exclusiva',
        'contact.f_service_opt4': 'Promoción de Estreno',
        'contact.f_service_opt5': 'Contenido para Redes',
        'contact.f_service_opt6': 'Otro',
        'contact.f_message': 'Mensaje',
        'contact.f_submit': 'Enviar cotización',
        'contact.f_alt': 'O contacta por WhatsApp',
        'footer.location': 'San Juan, Puerto Rico'
    },
    en: {
        'site.title': 'Movie Squad PR | Film Promotion',
        'nav.services': 'Services',
        'nav.interviews': 'Content',
        'nav.cta': 'Quote',
        'hero.title1': 'Your work',
        'hero.title2': 'deserves to be seen',
        'hero.desc': 'Promote your film project with in-depth reviews and exclusive interviews. At Movie Squad PR, we help filmmakers, directors, and producers give visibility to their stories.',
        'hero.cta_primary': 'Get a Quote',
        'hero.cta_secondary': 'WhatsApp',
        'services.tag': 'What we do',
        'services.title': 'We give voice to your work',
        'services.desc': 'Critical reviews, author interviews, and digital strategy.',
        'services.s1.title': 'Film Reviews',
        'services.s1.desc': 'Deep and honest critiques that highlight the artistic and technical strengths of your work.',
        'services.s2.title': 'Exclusive Interviews',
        'services.s2.desc': 'Intimate talks with your creative team to connect with the audience.',
        'services.s3.title': 'Digital Promotion',
        'services.s3.desc': 'Content strategy for social media and streaming platforms.',
        'interviews.tag': 'Our work',
        'interviews.title': 'Featured content',
        'interviews.desc': 'Check out some of the projects we have promoted.',
        'contact.tag': "Let's Talk",
        'contact.title': 'Ready to promote your project?',
        'contact.desc': 'Tell us about your film work and we will respond with a personalized strategy in less than 24 hours.',
        'contact.perk1': 'Free consultation',
        'contact.perk2': 'Custom strategy',
        'contact.perk3': 'No commitment',
        'contact.form_title': 'Get a Quote',
        'contact.form_sub': 'Tell us about your work.',
        'contact.f_name': 'Name',
        'contact.f_email': 'Email',
        'contact.f_phone': 'Phone',
        'contact.f_service': 'Service',
        'contact.f_service_opt1': 'Select',
        'contact.f_service_opt2': 'Film Review',
        'contact.f_service_opt3': 'Exclusive Interview',
        'contact.f_service_opt4': 'Premiere Promotion',
        'contact.f_service_opt5': 'Social Media Content',
        'contact.f_service_opt6': 'Other',
        'contact.f_message': 'Message',
        'contact.f_submit': 'Send Quote Request',
        'contact.f_alt': 'Or contact us via WhatsApp',
        'footer.location': 'San Juan, Puerto Rico'
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    });

    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    });

    /* =============================================
       ANIMACIÓN AGRESIVA DEL LENTE (Scroll)
       ============================================= */
    const lens = document.getElementById('cameraLens');
    const ring1 = document.querySelector('.ring-1');
    const ring2 = document.querySelector('.ring-2');
    const ring3 = document.querySelector('.ring-3');

    if (lens) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / maxScroll, 1);

            // Movimientos agresivos y notables:
            // El lente baja 300px, gira hasta 90 grados y escala hasta 1.5x
            const translateY = progress * 300;
            const rotateZ = progress * 90;
            const scale = 1 + progress * 0.5;

            lens.style.transform = `translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`;

            // Aplicar velocidades diferentes a cada anillo (efecto warp/zoom)
            if(ring1) ring1.style.transform = `rotateZ(${rotateZ * 1.2}deg) scale(${1 + progress * 0.3})`;
            if(ring2) ring2.style.transform = `rotateZ(${rotateZ * 0.8}deg) scale(${1 + progress * 0.4})`;
            if(ring3) ring3.style.transform = `rotateZ(${rotateZ * 1.5}deg) scale(${1 + progress * 0.2})`;
        });
    }

    /* =============================================
       ANIMACIÓN DE ENTRADA (Rebote agresivo)
       ============================================= */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Añadir un pequeño retraso entre cada tarjeta para que aparezcan en cascada
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));

    /* =============================================
       EMAILJS (Formulario)
       ============================================= */
    const EMAILJS_SERVICE_ID = 'service_2fjziv9';
    const EMAILJS_TEMPLATE_ID = 'template_saxwave';

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (typeof emailjs === 'undefined') {
                alert('Error: EmailJS no se cargó. Verifica tu conexión a internet.');
                return;
            }

            const submitBtn = contactForm.querySelector('.btn-submit-lp');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';

            const formData = {
                from_name: contactForm.querySelector('#from_name').value.trim(),
                reply_to: contactForm.querySelector('#email').value.trim(),
                phone: contactForm.querySelector('#phone').value.trim(),
                service: contactForm.querySelector('#service').value.trim(),
                message: contactForm.querySelector('#message').value.trim(),
            };

            const notifParams = {
                ...formData,
                to_email: 'moviesquadpr@gmail.com',
                to_name: 'Movie Squad PR',
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, notifParams)
                .then(() => {
                    contactForm.innerHTML = `
                        <div class="form-success" style="display:block;">
                            Cotización enviada. Te contactaremos en menos de 24 horas.
                        </div>
                    `;
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';
                    alert('Hubo un error al enviar. Por favor, inténtalo de nuevo.');
                });
        });
    }
});
