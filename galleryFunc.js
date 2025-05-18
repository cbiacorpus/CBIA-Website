// Redirecting Link Function
function goToLink(link) {
    console.log(link.value);
    window.open(link.value);
};

//Open the popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "flex";

    // Add a short delay so the opening click doesn't immediately trigger the close
    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
}

// Close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.getElementById(popupId).classList.remove("active");

    // Redirect back to Events page after closing popup
    if(sessionStorage.getItem("fromEventsPage")==="true"){
	sessionStorage.removeItem("fromEventsPage");
    	setTimeout(() => {
        	window.location.href = "Event.html"; //DIFF PATH
    	}, 300); // Delay to allow visual close
    }
}

//Show Tab
function showTab(id, btn) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

// Close popups when clicking outside of popup
window.addEventListener("click", function (e) {
    document.querySelectorAll(".popup.active").forEach(popup => {
        const content = popup.querySelector(".popup-content");

        // If the click is outside the popup content, close the popup
        if (!content.contains(e.target)) {
            popup.style.display = "none";
            popup.classList.remove("active");

            // Also redirect only if session flag is set
	    if(sessionStorage.getItem("fromEventsPage")==="true"){
		sessionStorage.removeItem("fromEventsPage");
            	setTimeout(() => {
                	window.location.href = "Event.html"; //DIFF PATH
            	}, 300);
	    }
        }
    });
});

// Automatically open popup based on URL hash
window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    const popupMap = {
        "#republic": "repubPopup",
        "#holi": "holiPopup",
        "#independence": "indPopup",
        "#diwali": "diwaliPopup",
        "#harvey": "harveyPopup",
        "#foodbank": "fbnkPopup",
        "#beach": "picnicPopup",
        "#socialmedia": "sclmdaPopup",
        "#badmin": "badminPopup",
	"#volley": "volleyPopup",
        // Add more mappings if needed
    };

    if (popupMap[hash]) {
        openPopup(popupMap[hash]);
        // clean up the hash from the URL
        history.replaceState(null, null, 'Gallery.html');
    }
});
