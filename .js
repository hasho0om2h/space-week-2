
function showMessage() {

    alert(
        "🚀 استمر في التعلم والاستكشاف... فالمستقبل يبدأ بفكرة!"
    );

}

function toggleMenu() {

    const links = document.querySelector(".nav-links");

    if (links.style.display === "flex") {

        links.style.display = "none";

    } else {

        links.style.display = "flex";

        links.style.flexDirection = "column";

        links.style.position = "absolute";

        links.style.top = "75px";

        links.style.right = "20px";

        links.style.background = "#0f172a";

        links.style.padding = "20px";

        links.style.borderRadius = "15px";

        links.style.gap = "15px";

        links.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.4)";
    }

}

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            document.querySelector(".nav-links").style.display = "none";

        }

    });

});