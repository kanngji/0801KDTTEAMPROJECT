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

// BangMangE
const frame = document.querySelector("figure section");
const list = frame.querySelectorAll("article");
console.log(list);
const len = list.length;
const deg = 360 / len;
const names = ["red1", "orange1", "yellow1", "green1", "sky1", "navy1", "violet1", "black1"];

for (let i = 0; i < len; i++) {
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-10vh)`;

  const pic = list[i].querySelector(".pic");
  pic.style.backgroundImage = `url("../photo/${names[i]}.png")`;

  const title = list[i].querySelector(".text>h2");
  title.innerHTML = `${names[i]}`;
}
