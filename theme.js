

const themeToggle = document.getElementById("theme-toggle");

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


// =================================
// APPLY THEME
// =================================

function applyTheme() {

    document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night"
    );

    const selectedTheme = themes[currentTheme];

    document.body.classList.add(selectedTheme.name);

    themeToggle.textContent = selectedTheme.icon;

    themeToggle.setAttribute(
        "title",
        "Current theme: " + selectedTheme.name
    );
}


// =================================
// START WITH MORNING
// =================================

applyTheme();


// =================================
// CHANGE THEME
// =================================

themeToggle.addEventListener("click", function () {

    currentTheme++;

    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }

    applyTheme();

});
