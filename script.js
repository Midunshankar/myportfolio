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

            if (navLinks.classList.contains("active")) {

                menuBtn.textContent = "✕";
                menuBtn.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

            } else {

                menuBtn.textContent = "☰";
                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        });


        // Close mobile menu after clicking a link

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuBtn.classList.remove("active");

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

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


            // Typing

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


            // Deleting

            else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                // Next word

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


    updateActiveNavigation();


    /* =========================================
       NAVBAR SHADOW ON SCROLL
    ========================================= */

    const header =
        document.querySelector("header");


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


                // Empty field check

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


                // Email validation

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


                // Success message

                alert(
                    `Thank you, ${name}! ` +
                    `Your message has been received.`
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


    /* =========================================
       PROJECT LINKS
    ========================================= */

    const projectLinks =
        document.querySelectorAll(
            ".project-card a"
        );


    projectLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");


                if (
                    href === "#" ||
                    !href
                ) {

                    event.preventDefault();

                    alert(
                        "Project link will be added soon."
                    );

                }

            }
        );

    });


    /* =========================================
       PROFILE IMAGE ERROR HANDLING
    ========================================= */

    const profileImage =
        document.querySelector(
            ".profile-img"
        );


    if (profileImage) {

        profileImage.addEventListener(
            "error",
            () => {

                console.log(
                    "Profile image could not be loaded."
                );

            }
        );

    }


    /* =========================================
       THEME BUTTONS
    ========================================= */

    const colorBtn =
        document.getElementById(
            "colorBtn"
        );

    const darkBtn =
        document.getElementById(
            "darkBtn"
        );

    const nightBtn =
        document.getElementById(
            "nightBtn"
        );


    /* =========================================
       BACKGROUND COLOR CHANGE
    ========================================= */

    const backgrounds = [
        "#f5f7fa",
        "#e0f2fe",
        "#fef3c7",
        "#fce7f3",
        "#dcfce7",
        "#ede9fe"
    ];

    let colorIndex = 0;


    if (colorBtn) {

        colorBtn.addEventListener(
            "click",
            () => {

                colorIndex++;

                if (
                    colorIndex >=
                    backgrounds.length
                ) {

                    colorIndex = 0;

                }


                document.body.style.background =
                    backgrounds[colorIndex];


                // Remove dark/night mode

                document.body.classList.remove(
                    "dark-mode"
                );

                document.body.classList.remove(
                    "night-mode"
                );


                // Reset icons

                if (darkBtn) {
                    darkBtn.textContent = "🌙";
                }

                if (nightBtn) {
                    nightBtn.textContent = "🌃";
                }

            }
        );

    }


    /* =========================================
       DARK MODE
    ========================================= */

    if (darkBtn) {

        darkBtn.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "dark-mode"
                );


                // Turn off night mode

                document.body.classList.remove(
                    "night-mode"
                );


                // Remove custom background

                document.body.style.background =
                    "";


                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    darkBtn.textContent = "☀️";

                } else {

                    darkBtn.textContent = "🌙";

                }


                if (nightBtn) {

                    nightBtn.textContent = "🌃";

                }

            }
        );

    }


    /* =========================================
       NIGHT MODE
    ========================================= */

    if (nightBtn) {

        nightBtn.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "night-mode"
                );


                // Turn off dark mode

                document.body.classList.remove(
                    "dark-mode"
                );


                // Remove custom background

                document.body.style.background =
                    "";


                if (
                    document.body.classList.contains(
                        "night-mode"
                    )
                ) {

                    nightBtn.textContent = "☀️";

                } else {

                    nightBtn.textContent = "🌃";

                }


                if (darkBtn) {

                    darkBtn.textContent = "🌙";

                }

            }
        );

    }


    /* =========================================
       SAVE THEME IN BROWSER
    ========================================= */

    const savedTheme =
        localStorage.getItem(
            "portfolioTheme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        if (darkBtn) {
            darkBtn.textContent = "☀️";
        }

    }


    if (savedTheme === "night") {

        document.body.classList.add(
            "night-mode"
        );

        if (nightBtn) {
            nightBtn.textContent = "☀️";
        }

    }


    /* =========================================
       SAVE DARK MODE
    ========================================= */

    if (darkBtn) {

        darkBtn.addEventListener(
            "click",
            () => {

                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    localStorage.setItem(
                        "portfolioTheme",
                        "dark"
                    );

                } else {

                    localStorage.removeItem(
                        "portfolioTheme"
                    );

                }

            }
        );

    }


    /* =========================================
       SAVE NIGHT MODE
    ========================================= */

    if (nightBtn) {

        nightBtn.addEventListener(
            "click",
            () => {

                if (
                    document.body.classList.contains(
                        "night-mode"
                    )
                ) {

                    localStorage.setItem(
                        "portfolioTheme",
                        "night"
                    );

                } else {

                    localStorage.removeItem(
                        "portfolioTheme"
                    );

                }

            }
        );

    }


    /* =========================================
       COLOR CHANGE STORAGE
    ========================================= */

    if (colorBtn) {

        colorBtn.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "portfolioTheme"
                );

                localStorage.setItem(
                    "portfolioBackground",
                    backgrounds[colorIndex]
                );

            }
        );

    }


    /* =========================================
       LOAD SAVED BACKGROUND
    ========================================= */

    const savedBackground =
        localStorage.getItem(
            "portfolioBackground"
        );


    if (
        savedBackground &&
        !savedTheme
    ) {

        document.body.style.background =
            savedBackground;


        const savedIndex =
            backgrounds.indexOf(
                savedBackground
            );


        if (savedIndex !== -1) {

            colorIndex = savedIndex;

        }

    }

});