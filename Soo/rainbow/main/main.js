// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter is ${i} is${logo[i].getTotalLength()}`);
// }

// GreenSock
gsap.registerPlugin(ScrollTrigger);
const red = gsap.timeline();

red.from(
    ".pic1",
    {
        y: 100,
        scale: 1,
        duration: 3,
        opacity: 0,
    },
    0
).to(".pic1", {
    scale: 1,
});

ScrollTrigger.create({
    animation: red,
    trigger: ".pic1",
    start: "-50% top",
    // end: "top 20%",
    end: "+=5000",
    scrub: 2,
    markers: true,
    pin: true,
});
// gsap.set(".one_half .main", { position: "fixed", width: "100%", maxWidth: "1200px", height: "100%", top: "0vw", left: "50%", x: "-50%" });
// gsap.set(".scrollDist", { position: "absolute", width: "100%", height: "200%", top: "40vw" });
// gsap.timeline({ scrollTrigger: { trigger: ".scrollDist", start: "top top", end: "bottom bottom", scrub: 1 } })
//     .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
//     .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
//     .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0);
