// GreenSock
gsap.registerPlugin(ScrollTrigger);
const h1 = gsap.timeline();
const h2 = gsap.timeline();
const h3 = gsap.timeline();
const h4 = gsap.timeline();
const h5 = gsap.timeline();
const h6 = gsap.timeline();

h1.from(".h1", {
    x: -100,
    scale: 3,
    duration: 1,
    opacity: 0,
})
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "90vw",
        y: "10vw",
    })
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "60vw",
        y: "20vw",
    })
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "50vw",
        y: "30vw",
    })
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "30vw",
        y: "40vw",
    })
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "10vw",
        y: "20vw",
    })
    .to(".h1", {
        opacity: 1,
        scale: 1,
        duration: 2,
        x: "30vw",
        y: "10vw",
    });
ScrollTrigger.create({
    animation: h1,
    trigger: ".h1",
    start: "top top",
    // end: "top 20%",
    end: "+=10000",
    scrub: 2,
    markers: true,
    pin: true,
});

// h2.from(".h2", {
//     x: -1000,
//     delay: 0.5,
//     scale: 3,
//     duration: 5,
//     opacity: 0,
// }).to(".h2", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 1,
//     duration: 5,
//     y: -100,
// });

// ScrollTrigger.create({
//     animation: h2,
//     trigger: ".h2",
//     start: "top top ",
//     // end: "top 20%",
//     end: "+=3000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });

// h3.from(".h3", {
//     x: -1000,
//     delay: 0.5,
//     scale: 3,
//     duration: 5,
//     opacity: 0,
// }).to(".h3", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 1,
//     duration: 5,
//     y: -100,
// });

// ScrollTrigger.create({
//     animation: h3,
//     trigger: ".h3",
//     start: "top top ",
//     // end: "top 20%",
//     end: "+=3000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });

// h4.from(".h4", {
//     x: -1000,
//     delay: 0.5,
//     scale: 3,
//     duration: 5,
//     opacity: 0,
// }).to(".h4", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 1,
//     duration: 5,
//     y: -100,
// });

// ScrollTrigger.create({
//     animation: h4,
//     trigger: ".h4",
//     start: "top top ",
//     // end: "top 20%",
//     end: "+=3000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });

// h5.from(".h5", {
//     x: -1000,
//     delay: 0.5,
//     scale: 3,
//     duration: 5,
//     opacity: 0,
// }).to(".h5", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 1,
//     duration: 5,
//     y: -100,
// });

// ScrollTrigger.create({
//     animation: h5,
//     trigger: ".h5",
//     start: "top top ",
//     // end: "top 20%",
//     end: "+=3000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });

// h6.from(".h6", {
//     x: -1000,
//     delay: 0.5,
//     scale: 3,
//     duration: 5,
//     opacity: 0,
// }).to(".h6", {
//     delay: 0.5,
//     opacity: 0,
//     scale: 1,
//     duration: 5,
//     y: -100,
// });

// ScrollTrigger.create({
//     animation: h6,
//     trigger: ".h6",
//     start: "top top ",
//     // end: "top 20%",
//     end: "+=3000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });
