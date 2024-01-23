const LMBtn = document.getElementById("lightMode");
LMBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode === true) {
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("bradPitt1").style.filter = "invert(95%) hue-rotate(180deg)";
        LMBtn.textContent = "Dark Mode";
    } else {
        document.body.style.filter = "none"; // Reset the filter
        document.getElementById("bradPitt1").style.filter = "none"; // Reset the filter for the specific element
        LMBtn.textContent = "Light Mode";
    }
}
