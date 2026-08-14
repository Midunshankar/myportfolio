/* =========================
   TYPING ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const typed = new Typed(".text", {
        strings: [
            "B.Com IT Student",
            "Web Developer",
            "Python Learner",
            "AI Enthusiast",
            "Frontend Developer"
        ],

        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });


    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("bx-menu");
            icon.classList.add("bx-x");
        } else {
            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");
        }

    });


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm =
        document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you for your message!");

        contactForm.reset();

    });

});
```
