const asteriod = document.querySelector(".box .asteriod");
const list = document.querySelectorAll(".things .box");
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
            console.log(e.currentTarget);
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

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");
var blue = document.getElementById("blue");

icon.addEventListener("click", function () {
    icon1.classList.toggle("a");
    icon2.classList.toggle("c");
    icon3.classList.toggle("b");
    nav.classList.toggle("show");
    blue.classList.toggle("slide");
});

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
