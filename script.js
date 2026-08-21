const themeToggle = document.getElementById("themeToggle");
const reloadButton = document.getElementById("reloadButton");
const clock = document.getElementById("clock");


// =========================
// THEME
// =========================

function updateThemeButton() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "switch to light";

    } else {

        themeToggle.textContent = "switch to dark";

    }

}


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    localStorage.setItem("theme", theme);

    updateThemeButton();

}


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("light");

}


// Toggle theme

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isDark =
            document.body.classList.contains("dark");

        applyTheme(
            isDark ? "light" : "dark"
        );

    });

}


// =========================
// CLOCK
// =========================

function updateClock() {

    if (!clock) return;


    const now = new Date();


    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");


    clock.textContent =
        `${hours}:${minutes}:${seconds}`;

}


updateClock();

setInterval(updateClock, 1000);


// =========================
// RELOAD
// =========================

if (reloadButton) {

    reloadButton.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

}