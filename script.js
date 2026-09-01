document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuBtn.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuBtn.textContent = "✕";
                menuBtn.setAttribute("aria-label", "Close Menu");
            } else {
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open Menu");
            }

        });
// PROFILE IMAGE
    const profileImage = document.querySelector(".profile-img");

    if (profileImage) {

        // Check if image loads correctly
        profileImage.addEventListener("load", () => {
            console.log("Profile image loaded successfully.");
        });

        // If image cannot be loaded
        profileImage.addEventListener("error", () => {
            console.log("Profile image could not be loaded.");

            profileImage.src = "profile.jpg";
        });

        // Click effect
        profileImage.addEventListener("click", () => {
            profileImage.classList.toggle("profile-zoom");
        });
    }
        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");

                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open Menu");

            });

        });

    }


    // TYPING ANIMATION
    const typingElement = document.querySelector(".typing");

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

                    wordIndex =
                        (wordIndex + 1) % words.length;
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 60 : 100
            );
        }

        typeEffect();
    }


    // SCROLL REVEAL
    const revealElements = document.querySelectorAll(
        ".section-title, " +
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".contact-container"
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


    // ACTIVE NAVIGATION
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNavigation() {

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

    updateActiveNavigation();


    // NAVBAR SHADOW
    const header = document.querySelector("header");

    function updateNavbar() {

        if (!header) return;

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

    updateNavbar();


    // CONTACT FORM
    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    contactForm.querySelector(
                        'input[name="name"]'
                    )?.value.trim();

                const email =
                    contactForm.querySelector(
                        'input[name="email"]'
                    )?.value.trim();

                const message =
                    contactForm.querySelector(
                        'textarea[name="message"]'
                    )?.value.trim();

                if (!name || !email || !message) {

                    alert(
                        "Please fill in all the fields."
                    );

                    return;
                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;
                }

                alert(
                    `Thank you, ${name}! Your message has been received.`
                );

                contactForm.reset();

            }
        );

    }


    // CURRENT YEAR
    const yearElement =
        document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // PROJECT LINKS
    const projectLinks =
        document.querySelectorAll(".project-card a");

    projectLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            if (href === "#" || !href) {

                event.preventDefault();

                alert(
                    "Project link will be added soon."
                );
            }

        });

    });

