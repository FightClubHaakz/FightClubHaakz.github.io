const LMBtn = document.getElementById("lightMode");
LMBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode === true) {
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.querySelectorAll(".bradPittImage").forEach(img => {
            img.style.filter = "invert(95%) hue-rotate(180deg)";
        });

        LMBtn.textContent = "Dark Mode";
        sessionStorage.lightModeEnable = true;
    } else {
        document.body.style.filter = "none"; // Reset the filter
        // Reset the filter for all elements with class "guitaristImage"
        document.querySelectorAll(".bradPittImage").forEach(img => {
            img.style.filter = "none";
        });

        LMBtn.textContent = "Light Mode";
        sessionStorage.lightModeEnable = false;
    }
}

// Check if light mode is enabled in session storage
if (sessionStorage.lightModeEnable === "true") {
    toggleLightMode(); // Enable light mode if it was previously enabled
} else {
    sessionStorage.lightModeEnable = false; // Set it to false if not previously set
}
