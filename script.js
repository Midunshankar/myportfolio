/* ========================================
   PORTFOLIO JAVASCRIPT
   Midun Shankar K
======================================== */


/* ========================================
   PAGE LOAD
======================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ========================================
       TYPING ANIMATION
    ======================================== */

    if (document.querySelector(".text")) {

        new Typed(".text", {

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

    }


    /* ========================================
       MOBILE MENU
    ======================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (navbar.classList.contains("active")) {

                    icon.classList.remove("bx-menu");
                    icon.classList.add("bx-x");

                } else {

                    icon.classList.remove("bx-x");
                    icon.classList.add("bx-menu");

                }

            }

        });

    }


    /* ========================================
       CLOSE MOBILE MENU
    ======================================== */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbar) {
                navbar.classList.remove("active");
            }

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("bx-x");
                    icon.classList.add("bx-menu");

                }

            }

        });

    });


    /* ========================================
       ACTIVE NAVIGATION
    ======================================== */

    const sections = document.querySelectorAll("section");

    function updateActiveNavigation() {

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

            const linkTarget =
                link.getAttribute("href");

            if (
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* ========================================
       CURRENT YEAR
    ======================================== */

    const yearElement =
        document.getElementById("current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ========================================
       CONTACT FORM
    ======================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "Thank you for your message!"
                );

                contactForm.reset();

            }
        );

    }


});
```
