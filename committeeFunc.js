function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("hidden");
    popup.style.display = "flex";
    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
    popup.classList.remove("active");
}

// Close any popup when clicking outside of its content
window.addEventListener("click", function (e) {
    document.querySelectorAll(".popup.active").forEach(popup => {
        const content = popup.querySelector(".popup-content");
        if (content && !content.contains(e.target)) {
            popup.style.display = "none";
            popup.classList.remove("active");
        }
    });
});