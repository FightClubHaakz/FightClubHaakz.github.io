// index.js

const lightModeBtn = document.getElementById("lightMode");
lightModeBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode) {
        // Apply light mode styles
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("introBox").style.filter = "invert(95%) hue-rotate(180deg)";
        lightModeBtn.textContent = "Dark Mode";
    } else {
        // Reset styles for dark mode
        document.body.style.filter = "none";
        document.getElementById("introBox").style.filter = "none";
        lightModeBtn.textContent = "Light Mode";
    }
}
