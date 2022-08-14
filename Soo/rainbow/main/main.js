// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter is ${i} is${logo[i].getTotalLength()}`);
// }

// GreenSock
gsap.registerPlugin(ScrollTrigger);

gsap.from("#wobble", {
    xPercent: 100,
    yPercent: 100,
    ease: "power2.out",
    duration: 10,
    scrollTrigger: {
        trigger: "#ourSVG",
        pin: true, // pin the trigger element while active
        start: "center 40%", // when the center of the trigger hits 40% from the top of the viewport
        end: "+=1000", // end after scrolling 1000px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
});

gsap.set(".one_half .main", { position: "fixed", background: "#fff", width: "100%", maxWidth: "1200px", height: "100%", top: "40vw", left: "50%", x: "-50%" });
gsap.set(".scrollDist", { position: "absolute", width: "100%", height: "200%", top: "40vw" });
gsap.timeline({ scrollTrigger: { trigger: ".scrollDist", start: "top top", end: "bottom bottom", scrub: 1 } })
    .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
    .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
    .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
    .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
    .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
    .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
    .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);
