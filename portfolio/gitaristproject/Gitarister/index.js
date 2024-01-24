const LMBtn = document.getElementById("lightMode");
LMBtn.addEventListener("click", toggleLightMode);

let isLightMode = false;

function toggleLightMode() {
    isLightMode = !isLightMode; // Toggle the state

    if (isLightMode === true) {
        document.body.style.filter = "invert(95%) hue-rotate(180deg)";
        document.querySelectorAll(".guitaristImage").forEach(img => {
            img.style.filter = "invert(95%) hue-rotate(180deg)";
        });

        LMBtn.textContent = "Dark Mode";
    } else {
        document.body.style.filter = "none"; // Reset the filter
        // Reset the filter for all elements with class "guitaristImage"
        document.querySelectorAll(".guitaristImage").forEach(img => {
            img.style.filter = "none";
        });

        LMBtn.textContent = "Light Mode";
    }
}
