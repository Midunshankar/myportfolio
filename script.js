document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // MOBILE MENU
    // ========================================

    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        const closeMenu = () => {
            navLinks.classList.remove("active");

            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
            menuButton.setAttribute("aria-expanded", "false");
        };

        menuButton.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuButton.textContent = isOpen ? "✕" : "☰";

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {

            link.addEventListener("click", closeMenu);

        });
    }


    // ========================================
    // TYPING ANIMATION
    // ========================================

    const words = [
        "B.Com IT Student",
        "Aspiring IT Professional",
        "Web Developer",
        "Creative Learner",
        "AI Enthusiast"
    ];

    const typingElement = document.querySelector(".typing");

    if (typingElement) {

        let wordIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        function type() {

            const word = words[wordIndex];

            if (deleting) {
                characterIndex--;
            } else {
                characterIndex++;
            }

            typingElement.textContent =
                word.slice(0, characterIndex);

            // Finished typing
            if (!deleting && characterIndex === word.length) {

                deleting = true;

                setTimeout(type, 1400);

                return;
            }

            // Finished deleting
            if (deleting && characterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;
            }

            setTimeout(
                type,
                deleting ? 55 : 95
            );
        }

        type();
    }


    // ========================================
    // THEME SWITCHER
    // ========================================

    const themeButton =
        document.querySelector("#theme-toggle");

    const themes = [
        {
            name: "morning",
            icon: "🌅"
        },
        {
            name: "afternoon",
            icon: "☀️"
        },
        {
            name: "evening",
            icon: "🌧️"
        },
        {
            name: "night",
            icon: "🌌"
        }
    ];

    let themeIndex = 0;

    if (themeButton) {

        function applyTheme() {

            document.body.classList.remove(
                ...themes.map(theme => theme.name)
            );

            document.body.classList.add(
                themes[themeIndex].name
            );

            themeButton.textContent =
                themes[themeIndex].icon;
        }

        themeButton.addEventListener("click", () => {

            themeIndex =
                (themeIndex + 1) % themes.length;

            applyTheme();
        });

        applyTheme();
    }


    // ========================================
    // SCROLL REVEAL
    // ========================================

    const revealElements = document.querySelectorAll(
        ".section-title, .about-content, .skill-card, .project-card, .contact-container"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

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

        revealElements.forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("show");

        });
    }


    // ========================================
    // NAVBAR SHADOW + ACTIVE LINK
    // ========================================

    const header = document.querySelector("header");

    function updateNavigation() {

        if (header) {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 50
            );
        }

        let currentSection = "home";

        document.querySelectorAll("main section").forEach(
            (section) => {

                if (
                    window.scrollY >=
                    section.offsetTop - 160
                ) {

                    currentSection = section.id;
                }

            }
        );

        document.querySelectorAll(".nav-links a").forEach(
            (link) => {

                link.classList.toggle(
                    "active",
                    link.hash === `#${currentSection}`
                );

            }
        );
    }

    window.addEventListener(
        "scroll",
        updateNavigation,
        {
            passive: true
        }
    );

    updateNavigation();


    // ========================================
    // CONTACT FORM
    // ========================================

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                if (!contactForm.checkValidity()) {

                    contactForm.reportValidity();

                    return;
                }

                const name =
                    contactForm.elements.name.value.trim();

                alert(
                    `Thank you, ${name}! Your message has been received.`
                );

                contactForm.reset();
            }
        );
    }


    // ========================================
    // CURRENT YEAR
    // ========================================

    const currentYear =
        document.querySelector("#current-year");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();
    }


    // ========================================
    // PROJECT LINKS
    // ========================================

    document
        .querySelectorAll(".project-card a[href='#']")
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                    alert(
                        "Project link will be added soon."
                    );
                }
            );
        });


    // ========================================
    // RESUME DOWNLOAD
    // ========================================

    const resumeButton =
        document.querySelector("#resume-download");

    if (resumeButton) {

        resumeButton.addEventListener(
            "click",
            () => {

                const link =
                    document.createElement("a");

                link.href = "resume.pdf";

                link.download =
                    "Midun-Shankar-K-Resume.pdf";

                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
            }
        );
    }

});
