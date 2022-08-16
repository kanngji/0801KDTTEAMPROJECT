var typed = new Typed(".element", {
    // Waits 1000ms after typing "First"
    strings: ["Hello :D^1000", "It is just a digital album.^1000", "Come on in !^2000"],
    typeSpeed: 100,
    backSpeed: 50,
    fadeOut: false,
    smartBackspace: true,
    cursorChar: "_",
    loop: false,
});

var typeload = new Typed(".elementLoading", {
    // Waits 1000ms after typing "First"
    strings: ["Loading..."],
    typeSpeed: 200,
    backSpeed: 100,
    fadeOut: false,
    smartBackspace: true,
    cursorChar: "_",
    loop: true,
});

var start_fun;
var op_count = 0;
var settime_func;
const enterBtn = document.querySelector(".enterBtn");
var albumEl = document.querySelector(".album");
var loadingEl = document.querySelector(".loading");
function displayNone() {
    loadingEl.setAttribute("style", "display: none");
}
window.onload = function () {
    start_fun = setTimeout(fade_in, 13500);
};

function fade_in() {
    op_count = op_count + 0.025;
    enterBtn.setAttribute("style", "display: block");
    enterBtn.style.opacity = op_count;
    settime_func = setTimeout(fade_in, 100);
    if (op_count > 1) {
        clearTimeout(settime_func);
    }
}

function mainMove() {
    window.location.replace("./main/main.html");
}
enterBtn.addEventListener("click", function () {
    albumEl.setAttribute("style", "display: none");
    loadingEl.setAttribute("style", "display: block");
    loadingEl.animate({ transform: ["scale(1)", "scale(1.75)"] }, { duration: 5000, fill: "forwards", easing: "ease" });
    // setTimeout(displayNone, 5000);
    setTimeout(mainMove, 4000);
});

// ===============================================================================================
