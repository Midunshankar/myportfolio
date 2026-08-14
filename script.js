document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("active");

        });


        // Close menu when navigation link is clicked

        const mobileLinks =
            document.querySelectorAll(".nav-links a");

        mobileLinks.forEach(link => {
            document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MOBILE NAVIGATION
    ================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");
            });
        });
    }


    /* ================================
       TYPING ANIMATION
    ================================= */

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "B.Com IT Student",
            "Aspiring IT Professional",
            "Web Developer",
            "Creative Learner"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {
                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {
                    deleting = true;

                    setTimeout(typeEffect, 1500);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, deleting ? 60 : 100);
        }

        typeEffect();
    }


    /* ================================
       SCROLL REVEAL ANIMATION
    ================================= */

    const revealElements = document.querySelectorAll(
        ".section-title, .about-content, .skill-card, .project-card, .contact-container"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* ================================
       ACTIVE NAVIGATION
    ================================= */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach(item => {

            item.classList.remove("active");

            if (
                item.getAttribute("href") === "#" + currentSection
            ) {
                item.classList.add("active");
            }

        });
    });


    /* ================================
       NAVBAR SHADOW ON SCROLL
    ================================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* ================================
       CONTACT FORM
    ================================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = contactForm.querySelector(
                'input[name="name"]'
            )?.value.trim();

            const email = contactForm.querySelector(
                'input[name="email"]'
            )?.value.trim();

            const message = contactForm.querySelector(
                'textarea[name="message"]'
            )?.value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all the fields.");
                return;
            }

            alert(
                `Thank you, ${name}! Your message has been received.`
            );

            contactForm.reset();
        });
    }


    /* ================================
       CURRENT YEAR
    ================================= */

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");

            });

        });

    }


    /* =========================================
       TYPING ANIMATION
    ========================================= */

    const typingElement =
        document.querySelector(".typing");

    if (typingElement) {

        const words = [
            "B.Com IT Student",
            "Aspiring IT Professional",
            "Web Developer",
            "Creative Learner",
            "AI Enthusiast"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentWord =
                words[wordIndex];


            /* ---------- TYPING ---------- */

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                // Word completed

                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1500
                    );

                    return;
                }

            }


            /* ---------- DELETING ---------- */

            else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                // Move to next word

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }


            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );

        }


        // Start typing animation

        typeEffect();

    }


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-title, " +
            ".about-content, " +
            ".skill-card, " +
            ".project-card, " +
            ".contact-container"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        // Fallback for older browsers

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section");

    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(item => {

            item.classList.remove("active");


            if (
                item.getAttribute("href") ===
                "#" + currentSection
            ) {

                item.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    // Run when page loads

    updateActiveNavigation();


    /* =========================================
       NAVBAR SHADOW ON SCROLL
    ========================================= */

    const header =
        document.querySelector("header");


    function updateNavbar() {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar
    );


    // Run when page loads

    updateNavbar();


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const nameInput =
                    contactForm.querySelector(
                        'input[name="name"]'
                    );


                const emailInput =
                    contactForm.querySelector(
                        'input[name="email"]'
                    );


                const messageInput =
                    contactForm.querySelector(
                        'textarea[name="message"]'
                    );


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";


                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";


                /* ---------- VALIDATION ---------- */

                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    alert(
                        "Please fill in all the fields."
                    );

                    return;

                }


                /* ---------- EMAIL VALIDATION ---------- */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }


                /* ---------- SUCCESS ---------- */

                alert(
                    `Thank you, ${name}! Your message has been received.`
                );


                // Clear form

                contactForm.reset();

            }
        );

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const yearElement =
        document.querySelector(
            "#current-year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});
```
