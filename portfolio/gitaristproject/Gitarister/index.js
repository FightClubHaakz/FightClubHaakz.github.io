const LMBtn = document.getElementById("lightMode");
LMBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode === true) {
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("slash").style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("EVH").style.filter = "invert(95%) hue-rotate(180deg)";
        document.getElementById("steveVai").style.filter = "invert(95%) hue-rotate(180deg)";
        LMBtn.textContent = "Dark Mode";
    } else {
        document.body.style.filter = "none"; // Reset the filter
    // Reset the filter for the specific element
        document.getElementById("slash").style.filter = "none";
        document.getElementById("EVH").style.filter = "none";
        document.getElementById("steveVai").style.filter = "none";
        LMBtn.textContent = "Light Mode";
    }
}
