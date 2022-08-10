// GreenSock
gsap.registerPlugin(ScrollTrigger);
const h1 = gsap.timeline();
const h2 = gsap.timeline();
const h3 = gsap.timeline();
const h4 = gsap.timeline();
const h5 = gsap.timeline();
const h6 = gsap.timeline();

h1.from(".h1", {
    x: -800,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h1", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h1,
    trigger: ".h1",
    start: "top top ",
    // end: "top 20%",
    end: "+=5000",
    scrub: 2,
    markers: true,
    pin: true,
});

h2.from(".h2", {
    x: -1000,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h2", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h2,
    trigger: ".h2",
    start: "top top ",
    // end: "top 20%",
    end: "+=3000",
    scrub: 2,
    markers: true,
    pin: true,
});

h3.from(".h3", {
    x: -1000,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h3", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h3,
    trigger: ".h3",
    start: "top top ",
    // end: "top 20%",
    end: "+=3000",
    scrub: 2,
    markers: true,
    pin: true,
});

h4.from(".h4", {
    x: -1000,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h4", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h4,
    trigger: ".h4",
    start: "top top ",
    // end: "top 20%",
    end: "+=3000",
    scrub: 2,
    markers: true,
    pin: true,
});

h5.from(".h5", {
    x: -1000,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h5", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h5,
    trigger: ".h5",
    start: "top top ",
    // end: "top 20%",
    end: "+=3000",
    scrub: 2,
    markers: true,
    pin: true,
});

h6.from(".h6", {
    x: -1000,
    delay: 0.5,
    scale: 3,
    duration: 5,
    opacity: 0,
}).to(".h6", {
    delay: 0.5,
    opacity: 0,
    scale: 1,
    duration: 5,
    y: -100,
});

ScrollTrigger.create({
    animation: h6,
    trigger: ".h6",
    start: "top top ",
    // end: "top 20%",
    end: "+=3000",
    scrub: 2,
    markers: true,
    pin: true,
});
// Flag
const pTag1 = document.querySelector(".first");
const pTag2 = document.querySelector(".second");
const pTag3 = document.querySelector(".third");
const pTag4 = document.querySelector(".forth");
const pTag5 = document.querySelector(".fifth");

const textArr1 = "WARNING WARNING WARNING WARNING".split(" ");
const textArr2 = "도 도 도 도 도 도 도 도".split(" ");
const textArr3 = "깨 깨 깨 깨 깨 깨 깨 깨".split(" ");
const textArr4 = "비 비 비 비 비 비 비 비".split(" ");
const textArr5 = "EMERGENCE EMERGENCE EMERGENCE EMERGENCE".split(" ");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);
initTexts(pTag4, textArr4);
initTexts(pTag5, textArr5);

function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0`;
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

    return count;
}

function animate() {
    count1++;
    count2++;
    count3++;
    count4++;
    count5++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);
    count3 = marqueeText(count3, pTag3, -1);
    count4 = marqueeText(count4, pTag4, 1);
    count5 = marqueeText(count5, pTag5, -1);

    window.requestAnimationFrame(animate);
}

function scrollHandler() {
    count1 += 25;
    count2 += 25;
    count3 += 25;
    count4 += 25;
    count5 += 25;
}

window.addEventListener("scroll", scrollHandler);
animate();

// window.addEventListener("wheel", function () {
//     console.log(window.scrollY);
//     if (window.scrollY >= 1600) {
//         console.log("참");
//         document.querySelector("body").style = "overflow-Y: hidden";
//     }
// });

// MoveBtn
let countBtn = 1;
const moveDown = document.querySelector(".moveDown");
const moveUp = document.querySelector(".moveUp");
const pageNum = document.getElementsByClassName("pg").length;

moveDown.addEventListener("click", function (e) {
    if (countBtn < pageNum && countBtn > 1) {
        countBtn++;
        moveDown.href = `#p${countBtn}`;
    } else if (countBtn == 1) {
        moveDown.href = "#p2";
        countBtn = 2;
    }
});

moveUp.addEventListener("click", function (e) {
    if (countBtn >= 2 && countBtn <= pageNum) {
        countBtn--;
        moveUp.href = `#p${countBtn}`;
    } else if (countBtn == 1) {
        moveUp.href = `#p${countBtn - 1}`;
    }
});

// // BangMangE
// const frame = document.querySelector("figure section");
// const list = frame.querySelectorAll("article");
// console.log(list);
// const len = list.length;
// const deg = 360 / len;
// const names = ["red1", "orange1", "yellow1", "green1", "sky1", "navy1", "violet1", "black1"];

// for (let i = 0; i < len; i++) {
//   list[i].style.transform = `rotate(${deg * i}deg) translateY(-10vh)`;

//   const pic = list[i].querySelector(".pic");
//   pic.style.backgroundImage = `url("../photo/${names[i]}.png")`;

//   const title = list[i].querySelector(".text>h2");
//   title.innerHTML = `${names[i]}`;
// }

// // BangMangE
const frame = document.querySelector("figure section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360 / len;
const names = ["red1", "orange1", "yellow1", "green1", "sky1", "navy1", "violet1", "black1"];

for (let i = 0; i < len; i++) {
    list[i].style.transform = `rotate(${deg * i}deg) translateX(7.2vw) translateY(3vw) scale(0.6)`;

    const pic = list[i].querySelector(".pic");
    pic.style.backgroundImage = `url("../photo/${names[i]}.png")`;
}

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;
let active = 0;

prev.addEventListener("click", function (e) {
    frame.style.transform = `rotate(${deg * ++num}deg)`;

    if (active === 0) {
        active = len - 1;
    } else {
        active--;
    }

    for (let el of list) {
        el.classList.remove("on");
    }
    list[active].classList.add("on");
});

next.addEventListener("click", function (e) {
    frame.style.transform = `rotate(${deg * --num}deg)`;

    if (active === len - 1) {
        active = 0;
    } else {
        active++;
    }

    for (el of list) {
        el.classList.remove("on");
    }
    list[active].classList.add("on");
});

// Swiper

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

const swiperPage = document.querySelector(".swiper-wrapper");
const img = document.createElement("img");
const plusBtn = document.querySelector("#p7 .plus");
let colorRight = "";
let colorLeft = "";
let red = 0,
    orange = 0,
    yellow = 0,
    green = 0,
    sky = 0,
    blue = 0,
    navy = 0,
    violet = 0,
    black = 0;

img.src = "../photo/point.png";
img.style = "width: 3vw; height: 3vw; transform: rotate(-90deg)";
swiperPage.addEventListener("click", function (e) {
    e.currentTarget.querySelector(".swiper-slide-active").appendChild(img);
    // console.log(e.currentTarget.querySelector(".swiper-slide-active").innerText);
    colorRight = e.currentTarget.querySelector(".swiper-slide-active").innerText;

    // console.log(document.querySelector(".on > .inner > .pic").classList[1]);
});

plusBtn.addEventListener("click", function () {
    colorLeft = document.querySelector(".on > .inner > .pic").classList[1];
    console.log(colorLeft);
    console.log(colorRight);
    if (colorLeft === colorRight) {
        switch (colorLeft) {
            case "Red":
                red = 1;
                console.log("해결!");
                break;
            case "Orange":
                orange = 1;
                console.log("해결!");
                break;
            case "Yellow":
                yellow = 1;
                console.log("해결!");
                break;
            case "Green":
                green = 1;
                console.log("해결!");
                break;
            case "Sky":
                sky = 1;
                console.log("해결!");
                break;
            case "Navy":
                navy = 1;
                console.log("해결!");
                break;
            case "Violet":
                violet = 1;
                console.log("해결!");
                break;
            case "Black":
                black = 1;
                console.log("해결!");
                break;
        }

        if (red === 1 && orange === 1 && yellow === 1 && green === 1 && sky === 1 && navy === 1 && violet === 1 && black === 1) {
            console.log("클리어!");
        } else {
            console.log("아직부족");
        }
    }
});
