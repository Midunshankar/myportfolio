// ========================================
// FULL PORTFOLIO THEME TOGGLE
// ========================================

const themeToggle = document.getElementById("theme-toggle");

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

let currentTheme = 0;


// Apply theme to the FULL website
function applyTheme() {

    // Remove old themes
    document.body.classList.remove(
        "morning",
        "afternoon",
        "evening",
        "night"
    );

    // Get current theme
    const selectedTheme = themes[currentTheme];

    // Add new theme
    document.body.classList.add(selectedTheme.name);

    // Change button icon
    themeToggle.textContent = selectedTheme.icon;
}


// Start with Morning
applyTheme();


// Change theme when button is clicked
themeToggle.addEventListener("click", function () {

    currentTheme++;

    // Go back to Morning after Night
    if (currentTheme >= themes.length) {
        currentTheme = 0;
    }

    applyTheme();

});
