// =====================================================================================================
const asteriod = document.querySelector(".asteriod");
const list = document.querySelectorAll(".box");
const length = document.querySelectorAll(".asteriod").length;
// const brokenSound = new Audio();
// brokenSound.src = "./broken-sound.wav";

for (let i = 0; i < length; i++) {
    const audio = document.createElement("audio");
    audio.setAttribute("src", "./img/broken-sound.wav");
    list[i].append(audio);
}

for (let el of list) {
    const play = el.querySelector(".asteriod");
    play.addEventListener("mouseenter", function (e) {
        if (e.currentTarget.classList.contains("broken")) {
            e.currentTarget.closest("div").querySelector("audio").pause();
        } else if ((e.currentTarget = "./asteroid2.png")) {
            e.currentTarget.classList.add("broken");
            e.currentTarget.src = "./img/broken-asteroid.png";
            e.currentTarget.style = "width: 18em; height: 18em";
            e.currentTarget.closest("div").querySelector("audio").play();
        }
    });
}

// // 소행성 한개는 가능
// asteriod.addEventListener("mouseenter", function (e) {
//     if ((asteriod.src = "./asteroid2.png")) {
//         asteriod.src = "./broken-asteroid.png";
//         asteriod.style = "width: 18em; height: 18em;";
//         brokenSound.muted = true;
//         brokenSound.play();
//         brokenSound.muted = false;
//         // 인터넷 창에서 미디어 자동재생 허용해야함
//     }
// });

// let cursor;
// let h1;
// let x, y;
// const mouseFunc = (e) => {
//   (x = e.clientX), (y = e.clientY);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   h1.innerHTML = `x: ${x} y: ${y}`;
//   cursor.style.transform = `translate(${x}px, ${y}px)`;
//   // 스크롤시 마우스 좌표 안먹음
// };

// window.onload = () => {
//   cursor = document.getElementsByClassName("cursor_item")[0];
//   h1 = document.getElementsByTagName("h1")[0];
//   document.addEventListener("mousemove", mouseFunc);
// };

// =====================================================================================================
let scrollYpos;
window.addEventListener("scroll", function () {
    scrollYpos = window.scrollY;
    console.log(scrollYpos);

    if (scrollYpos > 3400) {
        const sunAnimate = document.querySelector("#pg_3 .sun");
        sunAnimate.classList.add("animate");
    }

    if (scrollYpos > 4200) {
        const sunAnimate = document.querySelector("#pg_3 .wrapper");
        sunAnimate.classList.add("on");
    }

    if (scrollYpos > 3830) {
        const sunAnimate = document.querySelector("#pg_3 .spaceship");
        sunAnimate.classList.add("on");
    }
});

// =====================================================================================================

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".part-1", {
    x: 1000,
    duration: 2,
})
    .from(".part-2", {
        x: 1000,
        duration: 1,
    })
    .fromTo(".commet >img", 0.6, { opacity: 0 }, { opacity: 1, delay: 0.6 })
    .from(".part-3", {
        x: 1000,
        duration: 1,
    })
    .from(".part-4", {
        x: 1000,
        duration: 1,
    })
    .fromTo(".monster >img", 1.0, { opacity: 0 }, { opacity: 1, delay: 1.0 });
