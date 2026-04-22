

/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/*scroll section active link*/
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar -----*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*remove toggle icon and navbar*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
/*Scroll Reveal */

ScrollReveal({
    distance: '80px',
    duration: 250,
    delay: 300,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });

/*typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Software engineer'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true,
});

/* Contact Form Email */
function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const subject = document.getElementById("contact-subject").value;
    const body = document.getElementById("contact-body").value;
    
    const mailtoBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${body}`;
    const mailtoLink = `mailto:leonardo.yaranga@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;
}

/* Web Component for Social Media Links */
class SocialMediaLinks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="social-media">
            <a href="https://www.linkedin.com/in/leonardo-yaranga-0a5447220/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/LeonardoYaranga" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/wyes_lje" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/wyes_lje/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
        `;
    }
}
customElements.define('social-media-links', SocialMediaLinks);