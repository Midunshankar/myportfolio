console.log("Portfolio Website Loaded Successfully!");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked");
    });
});