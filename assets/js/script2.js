document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const progress = bar.querySelector('.skill-progress');
        progress.style.width = progress.getAttribute('style').split(':')[1].trim();
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = `Gracias por tu mensaje, ${name}. Te responderé pronto a ${email}.`;

        form.reset();
    });
});
