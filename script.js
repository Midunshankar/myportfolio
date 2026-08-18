document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuBtn.classList.toggle("active");

            if (isOpen) {

                menuBtn.textContent = "✕";

                menuBtn.setAttribute(
                    "aria-label",
                    "Close Menu"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        /* Close menu after clicking a link */

        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("active");

                    menuBtn.classList.remove("active");

                    menuBtn.textContent = "☰";

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open Menu"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
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


            /* Typing */

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                /* Word completed */

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


            /* Deleting */

            else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                /* Move to next word */

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
            ".project-card"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

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

        /* Fallback */

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

    updateNavbar();



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
       PROFILE IMAGE
    ========================================= */

    const profileImage =
        document.querySelector(
            ".profile-img"
        );


    if (profileImage) {

        profileImage.addEventListener(
            "load",
            () => {

                console.log(
                    "Profile image loaded successfully."
                );

            }
        );


        profileImage.addEventListener(
            "error",
            () => {

                console.error(
                    "Profile image could not be loaded."
                );

                profileImage.alt =
                    "Profile image unavailable";

            }
        );

    }



    /* =========================================
       BACKGROUND COLOUR CHANGE
    ========================================= */

    const colorBtn =
        document.querySelector(
            "#colorBtn"
        );


    const backgroundColors = [

        "#f5f7fa",

        "#eef6ff",

        "#f0fdf4",

        "#fff7ed",

        "#fdf4ff",

        "#fefce8"

    ];


    let savedColorIndex =
        localStorage.getItem(
            "colorIndex"
        );


    let colorIndex =
        savedColorIndex !== null
            ? Number(savedColorIndex)
            : 0;


    /* Make sure the saved value is valid */

    if (
        Number.isNaN(colorIndex) ||
        colorIndex < 0 ||
        colorIndex >= backgroundColors.length
    ) {

        colorIndex = 0;

    }


    function applyBackgroundColor() {

        document.body.style.backgroundColor =
            backgroundColors[colorIndex];

    }


    if (colorBtn) {

        colorBtn.addEventListener(
            "click",
            () => {

                colorIndex =
                    (colorIndex + 1) %
                    backgroundColors.length;


                localStorage.setItem(
                    "colorIndex",
                    colorIndex
                );


                applyBackgroundColor();

            }
        );

    }


    /* Load saved background colour */

    applyBackgroundColor();

});
