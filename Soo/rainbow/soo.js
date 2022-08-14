// const mainGroup = document.querySelector(".svg-main");
// const mainPaths = mainGroup.querySelectorAll("path");

// mainPaths.forEach((path, index) => {
//     const length = path.getTotalLength();
//     path.style.setProperty("--length", length);
//     path.style.setProperty("--delay", index * 100 + "ms");
//     path.style.setProperty("--duration", length * 5 + "ms");
// });

// const bgGroup = document.querySelector(".svg-bg");
// const bgPaths = bgGroup.querySelectorAll("path");

// bgPaths.forEach((path, index) => {
//     const length = path.getTotalLength();
//     path.style.setProperty("--length", length);
//     path.style.setProperty("--delay", index * 100 + "ms");
//     path.style.setProperty("--duration", length * 5 + "ms");
// });

// var options = {
//     strings: ["Hello", "DoGGaeB", "kkk"],
//     typeSpeed: 200,
//     backSpeed: 100,
//     fadeOut: true,
//     smartBackspace: true,
//     cursorChar: "_",
//     loop: true,
// };

var typed = new Typed(".element", {
    // Waits 1000ms after typing "First"
    strings: ["Hello^2000", "DoGGaeB^2000", "kkk^2000"],
    typeSpeed: 200,
    backSpeed: 100,
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
    start_fun = setTimeout(fade_in, 1000);
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

enterBtn.addEventListener("click", function () {
    albumEl.setAttribute("style", "display: none");
    loadingEl.setAttribute("style", "display: block");
    loadingEl.animate({ transform: ["scale(1)", "scale(1.75)"] }, { duration: 2000, fill: "forwards", easing: "ease" });
    setTimeout(displayNone, 3000);
});

// ===============================================================================================
