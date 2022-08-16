// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter is ${i} is${logo[i].getTotalLength()}`);
// }

// 로고

const logo = document.querySelector(".logo");
const liEl = document.querySelector("ul");
const imgEl = document.querySelectorAll(".navigation ul li a img");

let logoClick = 0;
if (logoClick == 0) {
    for (let i = 0; i < 5; i++) {
        imgEl[i].setAttribute("style", "display: none;");
    }
    liEl.setAttribute("style", "display: none;");
}
logo.addEventListener("click", function () {
    if (logoClick == 0) {
        for (let i = 0; i < 5; i++) {
            imgEl[i].setAttribute("style", "display: block;");
        }
        liEl.setAttribute("style", "display: block;");

        liEl.style.animation = "move0 1s forwards ease";
        logoClick = 1;
    } else if (logoClick == 1) {
        liEl.style.animation = "";
        liEl.style.animation = "fade 1s forwards ease";
        logoClick = 0;
    }
});
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
            rotate: "5deg",
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
            rotate: "-5deg",
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
            rotate: "5deg",
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
            rotate: "-5deg",
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
            rotate: "0deg",
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
    // markers: true,
    pin: true,
});
// gsap.set(".one_half .main", { position: "fixed", width: "100%", maxWidth: "1200px", height: "100%", top: "0vw", left: "50%", x: "-50%" });
// gsap.set(".scrollDist", { position: "absolute", width: "100%", height: "200%", top: "40vw" });
// gsap.timeline({ scrollTrigger: { trigger: ".scrollDist", start: "top top", end: "bottom bottom", scrub: 1 } })
//     .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
//     .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
//     .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0);

//

const dday = new Date("2021-10-01:17:20:00+0900").getTime();

setInterval(function () {
    const today = new Date().getTime();
    const gap = today - dday;
    const day = Math.floor(gap / (1000 * 60 * 60 * 24)) - 300;
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((gap % (1000 * 60)) / 1000);
    const month = Math.floor(gap / (1000 * 60 * 60 * 24 * 30));

    document.getElementById("month").innerHTML = month + " months ";
    document.getElementById("day").innerHTML = day + " days ";
    document.getElementById("hour").innerHTML = hour + "　h";
    document.getElementById("min").innerHTML = min + " m";
    document.getElementById("sec").innerHTML = sec + " s";
}, 1000);

const birth = gsap.timeline();

birth
    .to(".from", {
        color: "rgb(256, 256, 256)",
        webkitTextStroke: "8px rgb(11, 24, 39)",
        duration: 1,
    })
    .to(".the", {
        color: "rgb(256, 256, 256)",
        webkitTextStroke: "4px rgb(11, 24, 39)",
        duration: 1,
    })
    .to(".birthday", {
        color: "rgb(256, 256, 256)",
        webkitTextStroke: "8px rgb(11, 24, 39)",
        duration: 1,
    })
    .to("#month", {
        color: "rgb(256, 256, 256)",
        // webkitTextStroke: "7px rgb(11, 24, 39)",
        duration: 1,
    })
    .to("#day", {
        color: "rgb(256, 256, 256)",
        // webkitTextStroke: "7px rgb(11, 24, 39)",
        duration: 1,
    })
    .to("#hour", {
        color: "rgb(256, 256, 256)",
        // webkitTextStroke: "7px rgb(11, 24, 39)",
        duration: 1,
    })
    .to("#min", {
        color: "rgb(256, 256, 256)",
        // webkitTextStroke: "7px rgb(11, 24, 39)",
        duration: 1,
    })
    .to("#sec", {
        color: "rgb(256, 256, 256)",
        // webkitTextStroke: "7px rgb(11, 24, 39)",
        duration: 3,
    });

ScrollTrigger.create({
    animation: birth,
    trigger: ".third",
    start: "top -48%",
    // end: "top 20%",
    end: "+=6000",
    scrub: 2,
    // markers: true,
    pin: true,
});

// ===========================================================================
const list = document.querySelector("#fourth");
const wrap = list.querySelectorAll(".wrap div");

const redEl = list.querySelector(".wrap .red");
const redBtn = list.querySelector("#btns .btn_red");

const orangeEl = list.querySelector(".wrap .orange");
const orangeBtn = list.querySelector("#btns .btn_orange");

const yellowEl = list.querySelector(".wrap .yellow");
const yellowBtn = list.querySelector("#btns .btn_yellow");

const greenEl = list.querySelector(".wrap .green");
const greenBtn = list.querySelector("#btns .btn_green");

const skyEl = list.querySelector(".wrap .sky");
const skyBtn = list.querySelector("#btns .btn_sky");

const violetEl = list.querySelector(".wrap .violet");
const violetBtn = list.querySelector("#btns .btn_violet");

const blackEl = list.querySelector(".wrap .black");
const blackBtn = list.querySelector("#btns .btn_black");

redBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 0) {
            wrap[i].setAttribute("style", "display: none");
            // wrap[i].animate({ opacity: 1, opacity: 0, opacity: 0 }, { duration: 1000, fill: "forwards", easing: "ease" });
        }
        // list.querySelectorAll(".btn")[i].style = "color: #343434";
    }
    redEl.setAttribute("style", "display: block");
    // wrap.animate({ opacity: 0, opacity: 1, opacity: 0 }, { duration: 1000, fill: "forwards", easing: "ease" });
    redEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

orangeBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 1) {
            wrap[i].setAttribute("style", "display: none");
        }
    }
    orangeEl.setAttribute("style", "display: block");
    orangeEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

yellowBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 2) {
            wrap[i].setAttribute("style", "display: none");
        }
    }
    yellowEl.setAttribute("style", "display: block");
    yellowEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

greenBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 3) {
            wrap[i].setAttribute("style", "display: none");
        }
    }
    greenEl.setAttribute("style", "display: block");
    greenEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

skyBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 4) {
            wrap[i].setAttribute("style", "display: none");
        }
    }
    skyEl.setAttribute("style", "display: block");
    skyEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

violetBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 5) {
            wrap[i].setAttribute("style", "display: none");
        }
    }
    violetEl.setAttribute("style", "display: block");
    violetEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

blackBtn.addEventListener("click", function () {
    for (let i = 0; i < 7; i++) {
        if (i != 6) {
            wrap[i].setAttribute("style", "display: none");
        }
        // list.querySelectorAll(".btn")[i].style = "color: white";
    }

    blackEl.setAttribute("style", "display: block");
    blackEl.animate({ opacity: 0.3, opacity: 1, opacity: 1 }, { duration: 2000, fill: "forwards", easing: "ease" });
});

// 우클릭 빨강
let rightClicked = 0;
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (rightClicked == 0) {
        document.querySelector("body").style = "cursor: url('./dot.png'), auto";
        rightClicked = 1;
    } else {
        document.querySelector("body").style = "cursor: default";
        rightClicked = 0;
    }
});
