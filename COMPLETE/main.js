const scrollBtn = document.querySelector(".noContent section");

setTimeout(function () {
  scrollBtn.setAttribute("style", "display: block");
  console.log(scrollBtn);
}, 20000);

// GreenSock
gsap.registerPlugin(ScrollTrigger);
const h1 = gsap.timeline();

h1.from(".h1", {
  scale: 3,
  duration: 100,
  delay: 30,
  opacity: 0,
})
  .to(
    ".h1",
    {
      duration: 50,
      x: "45vw",
      y: "-10vw",
      delay: 30,
    },
    "<"
  )
  .from(
    ".t1",
    {
      opacity: 0,
      duration: 100,
      delay: 30,
    },
    ">"
  )
  .to(".h1", {
    opacity: 1,
    scale: 5,
    duration: 100,
    x: "75vw",
    y: "5vw",
    delay: 30,
  })
  .to(".h1", {
    opacity: 1,
    scale: 5,
    duration: 100,
    x: "75vw",
    y: "5vw",
    delay: 30,
  })
  .to(
    ".t1",
    {
      duration: 100,
      opacity: 0,
      y: -100,
      delay: 30,
    },
    "<"
  )
  .from(
    ".t2",
    {
      opacity: 0,
      duration: 100,
      delay: 30,
    },
    ">"
  )
  .to(".h1", {
    scale: 0.8,
    duration: 100,
    delay: 30,
    x: "20vw",
    y: "-3vw",
  })
  .to(
    ".t2",
    {
      duration: 100,
      opacity: 0,
      y: -100,
      delay: 30,
    },
    "<"
  )
  .from(".t3", {
    opacity: 0,
    duration: 100,
    delay: 30,
  })
  .to(".h1", {
    scale: 1.4,
    duration: 100,
    x: "40vw",
    y: "3vw",
    delay: 30,
  })
  .to(
    ".t3",
    {
      duration: 100,
      opacity: 0,
      y: -100,
      delay: 30,
    },
    "<"
  )
  .from(".t4", {
    opacity: 0,
    duration: 100,
    delay: 30,
  })
  .to(".h1", {
    duration: 100,
    x: "70vw",
    y: "5vw",
    delay: 30,
  })

  .to(
    ".t4",
    {
      duration: 100,
      opacity: 0,
      y: -100,
      delay: 30,
    },
    "<"
  )
  .to(".h1", {
    duration: 100,
    x: "10vw",
    y: "20vw",
  })

  .to(".h1", {
    duration: 100,
    rotate: "-110deg",
  })
  .to(".h1", {
    duration: 100,
    x: "70vw",
    y: "-3vw",
  })

  .to(".h1", {
    duration: 100,
    x: "47.5vw",
    y: "-7vw",
    rotate: "-360deg",
  })
  .from(".t5", {
    opacity: 0,
    duration: 100,
    delay: 30,
  })
  .to(".t5", {
    duration: 100,
    opacity: 0,
    y: -100,
    delay: 30,
  })
  .to(".h1", {
    duration: 100,
    x: "47.5vw",
    y: "37vw",
    opacity: 0,
  });

ScrollTrigger.create({
  animation: h1,
  trigger: ".intro",
  start: "3.5% 14%",
  // end: "top 20%",
  end: "+=10000",
  scrub: true,
  // markers: true,
  pin: true,
});

// const t1 = gsap.timeline();

// t1.to(".text", {
//   duration: 2,
//   opacity: 0,
//   y: -100,
// }).to(".t2", {
//   duration: 2,
//   opacity: 0,
//   y: -100,
// });

// ScrollTrigger.create({
//   animation: t1,
//   trigger: ".intro",
//   start: "top top",
//   // end: "top 20%",
//   end: "+=10000",
//   scrub: 2,
//   markers: true,
//   pin: true,
// });

// =====================================================================================================
// const asteriod = document.querySelector(".asteriod");
// const list = document.querySelectorAll(".box");
// const length = document.querySelectorAll(".asteriod").length;
// // const brokenSound = new Audio();
// // brokenSound.src = "./broken-sound.wav";

// for (let i = 0; i < length; i++) {
//     const audio = document.createElement("audio");
//     audio.setAttribute("src", "./img/broken-sound.wav");
//     list[i].append(audio);
// }

// for (let el of list) {
//     const play = el.querySelector(".asteriod");
//     play.addEventListener("mouseenter", function (e) {
//         if (e.currentTarget.classList.contains("broken")) {
//             e.currentTarget.closest("div").querySelector("audio").pause();
//         } else if ((e.currentTarget = "./asteroid2.png")) {
//             e.currentTarget.classList.add("broken");
//             e.currentTarget.src = "./img/broken-asteroid.png";
//             e.currentTarget.style = "width: 18em; height: 18em";
//             e.currentTarget.closest("div").querySelector("audio").play();
//         }
//     });
// }

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

  if (scrollYpos > 13500) {
    const sunAnimate = document.querySelector("#pg_3 .sun");
    sunAnimate.classList.add("animate");
  }

  if (scrollYpos > 14600) {
    const sunAnimate = document.querySelector("#pg_3 .wrapper");
    sunAnimate.classList.add("on");
  }

  // if (scrollYpos > 3830) {
  //     const sunAnimate = document.querySelector("#pg_3 .spaceship");
  //     sunAnimate.classList.add("on");
  // }
});
// 지구탈출
// let exitEarth = gsap.timeline();
// exitEarth.to(".bigEarth", {
//     y: 2100,
//     scale: 8,
//     duration: 13,
//     opacity: 1,
// });

// ScrollTrigger.create({
//     animation: exitEarth,
//     trigger: "#exitEarth",
//     start: "top top",
//     // end: "top 20%",
//     end: "+=5000",
//     scrub: 2,
//     markers: true,
//     pin: true,
// });

const planet = document.querySelector(".bigEarth>img");
const jojong = document.querySelector(".background img");
const white = document.querySelector(".white");

// setTimeout(() => {
//   planet.style = "transition: 1s";
//   planet.style.opacity = 0;
// }, 7200);

// setTimeout(() => {
//   jojong.style = "transition: 1s";
//   jojong.style.opacity = 0;
// }, 8250);

// setTimeout(() => {
//   white.setAttribute("style", "display: block");
// }, 6000);

// =====================================================================================================
// Pg4 Whats your planet
// gsap.registerPlugin(ScrollTrigger);
let pg4 = gsap.timeline();

pg4
  .from(".what", {
    x: -500,
    opacity: 0,
    duration: 3,
  })
  .to(".what", {
    scale: 1,
    opacity: 1,
  })
  .from(".your", {
    x: -500,
    opacity: 0,
    duration: 3,
  })
  .to(".your", {
    scale: 1,
    opacity: 1,
  })
  .from(".planet", {
    x: -500,
    opacity: 0,
    duration: 3,
  })
  .to(".planet", {
    scale: 1,
    opacity: 1,
  })
  .from(".arrows", {
    x: 500,
    opacity: 0,
    duration: 3,
  })
  .to(".arrows", {
    scale: 1,
    opacity: 1,
    duration: 10,
  });

var hz = document.getElementById("hz"),
  play = document.getElementById("play"),
  pause = document.getElementById("pause");
play.addEventListener("click", playVideo);
// pause.addEventListener("click", pauseVideo);

function playVideo() {
  hz.play();
  const planet = document.querySelector(".bigEarth>img");
  const jojong = document.querySelector(".background img");
  const white = document.querySelector(".white");

  planet.style.animation = "bigger 12s forwards linear";
  setTimeout(() => {
    planet.style = "transition: 1s";
    planet.style.opacity = 0;
  }, 6500);

  setTimeout(() => {
    jojong.style = "transition: 1s";
    jojong.style.opacity = 0;
  }, 8250);

  setTimeout(() => {
    white.setAttribute("style", "display: block");
  }, 6000);
}

// function pauseVideo() {
//   hz.pause();
// }

ScrollTrigger.create({
  animation: pg4,
  trigger: "#pg_4",
  start: "top top",
  // end: "top 20%",
  end: "+=5000",
  scrub: 2,
  //   markers: true,
  pin: true,
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
