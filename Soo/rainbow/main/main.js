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
        x: 600,
        scale: 2,
        duration: 3,
        opacity: 0,
        rotate: "10deg",
    },
    0
)
    .from(
        ".pic2",
        {
            scale: 0,
            duration: 3,
            opacity: 0.5,
        },
        0
    )
    .from(
        ".text1",
        {
            color: "white",
            y: 100,
            textShadow: "none",
        },
        1
    )
    .to(
        ".text1",
        {
            duration: 3,
        },
        "<"
    )
    .to(
        ".pic2",
        {
            rotate: "4deg",
        },
        1
    )
    .from(
        ".text2",
        {
            color: "white",
            y: 100,
            textShadow: "none",
        },
        2
    )
    .to(".text2", {
        duration: 1,
    })
    .to(
        ".pic2",
        {
            rotate: "8deg",
        },
        2
    )
    .from(
        ".text3",
        {
            color: "white",
            y: 100,
            textShadow: "none",
        },
        3
    )
    .to(".text3", {
        duration: 1,
    })
    .to(
        ".pic2",
        {
            rotate: "12deg",
        },
        3
    )
    .from(
        ".text4",
        {
            color: "white",
            y: 100,
            textShadow: "none",
        },
        4
    )
    .to(".text4", {
        duration: 1,
    })
    .to(
        ".pic2",
        {
            rotate: "16deg",
        },
        4
    )
    .to(".pic1", {
        opacity: 0,
    })
    .from(".pic3", { opacity: 0, x: -450, y: 100, duration: 3, scale: 1.7 })

    .from(
        ".text5",
        {
            color: "white",
            y: 100,
            textShadow: "none",
        },
        5
    )
    .to(
        ".pic2",
        {
            rotate: "20deg",
            opacity: 0,
        },
        5
    )
    .to(".text5", {
        duration: 1,
    })
    .to(".pic2", {
        opacity: 0,
    });

ScrollTrigger.create({
    animation: red,
    trigger: ".red",
    start: "top 7%",
    // end: "top 20%",
    end: "+=8000",
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
