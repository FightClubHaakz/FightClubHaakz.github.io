// index.js

const lightModeBtn = document.getElementById("lightMode");
lightModeBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

// Function to toggle light mode
function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode) {
        // Apply light mode styles
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("introBox").style.filter = "invert(95%) hue-rotate(180deg)";
        lightModeBtn.textContent = "Dark Mode";
        sessionStorage.lightModeEnable = true;
    } else {
        // Reset styles for dark mode
        document.body.style.filter = "none";
        document.getElementById("introBox").style.filter = "none";
        lightModeBtn.textContent = "Light Mode";
        sessionStorage.lightModeEnable = false;
    }
}

// Check if light mode is enabled in session storage
if (sessionStorage.lightModeEnable === "true") {
    toggleLightMode(); // Enable light mode if it was previously enabled
} else {
    sessionStorage.lightModeEnable = false; // Set it to false if not previously set
}
