gsap.to(".planet", {
    y: 2100,
    scale: 8,
    duration: 13,
    opacity: 1,
}) 

const planet = document.querySelector(".planet>img")
const jojong = document.querySelector(".background img")
const white = document.querySelector(".white")

setTimeout(() => {
    planet.style = "transition: 1s"
    planet.style.opacity = 0;
}, 6000);

setTimeout(() => {
    jojong.style = "transition: 1s"
    jojong.style.opacity = 0;
}, 7000);

setTimeout(() => {
    white.setAttribute("style", "display: block")
}, 7000);


// setTimeout(() => {
//     las2.style.zIndex = 1;
//     las3.style.zIndex = 1;
//     las4.style.zIndex = 1;
// }, 1400);