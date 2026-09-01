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
// ===============================
// 4 THEME SYSTEM
// ===============================

const toggle = document.getElementById("theme-toggle");

const themes = [
    {
        name: "morning",
        icon: "🌅"
    },
    {
        name: "afternoon",
        icon: "☁️"
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

let currentTheme = 0;

function applyTheme() {

    document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night",
        "light-mode"
    );

    const theme = themes[currentTheme];

    document.body.classList.add(theme.name);

    toggle.textContent = theme.icon;
}


// Start with Morning
applyTheme();


// Change theme when button is clicked
toggle.addEventListener("click", () => {

    currentTheme++;

    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }

    applyTheme();

});
// ===============================
// TYPING EFFECT
// ===============================

const roles = [
    "Full Stack Developer",
    "Front-End Developer",
    "Web Developer"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typing.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .skill, .stat").forEach(element => {
    observer.observe(element);
});


// ===============================
// SMOOTH NAVIGATION
// ===============================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
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


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});
// ===============================
// MESSAGE ME POPUP
// ===============================

const messageButton = document.getElementById("message-button");
const messageModal = document.getElementById("message-modal");
const closeMessage = document.getElementById("close-message");
const messageForm = document.getElementById("message-form");


// Open popup

messageButton.addEventListener("click", () => {

    messageModal.classList.add("active");

});


// Close popup

closeMessage.addEventListener("click", () => {

    messageModal.classList.remove("active");

});


// Close when clicking outside the box

messageModal.addEventListener("click", (event) => {

    if (event.target === messageModal) {

        messageModal.classList.remove("active");

    }

});


// Send message

messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("message-name").value;
    const email = document.getElementById("message-email").value;
    const message = document.getElementById("message-text").value;


    const subject = encodeURIComponent(
        "Portfolio Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    window.location.href =
        "mailto:nikhil0307k@gmail.com?subject=" +
        subject +
        "&body=" +
        body;

});
