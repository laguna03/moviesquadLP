document.addEventListener('DOMContentLoaded', () => {
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
