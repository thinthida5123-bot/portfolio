document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll("#nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth"
        });
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const reveals = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-content, .contact-card, .about-card, .education-card"
);

function checkReveal() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal); 


const heroText = document.querySelector(".hero-left h2");
 const texts = [
     "Computer Science Student",
   "Frontend Developer",
        "UI/UX Enthusiast",
    "Web Developer" ];

let index = 0;
let charIndex = 0;
let currentText = "";

function typeEffect() {
    if (charIndex < texts[index].length) {
        currentText += texts[index].charAt(charIndex);
        heroText.textContent = currentText;
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1800);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        currentText = texts[index].substring(0, charIndex - 1);
        heroText.textContent = currentText;
        charIndex--;
        setTimeout(eraseEffect, 40);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 400);
    }
}

typeEffect();