//****************슬라이드 눌렀을 때 밑에 박스 보이는 JS**************** */

const slider1 = document.querySelector(".lee .slider");
const btn1 = document.querySelector(".lee .btn1");
const box1 = document.querySelector(".lee .under_box1");

let clicked1 = 0;
let clicked2 = 0;
let clicked3 = 0;

btn1.addEventListener("click", function () {
  if (clicked1 === 0) {
    slider1.style.transform = "translateY(-10vw)";
    btn1.style.transform = "translateY(-10vw)";
    box1.style.opacity = 1;
    clicked1 = 1;
  } else {
    slider1.style.transform = "translateY(0vw)";
    btn1.style.transform = "translateY(0vw)";
    box1.style.opacity = 0;
    clicked1 = 0;
  }
});

// slider1.style.transform = "translateY(-10vw)"
// btn1.style.transform = "translateY(-10vw)"
// box1.style.opacity = 1;

const slider2 = document.querySelector(".lee .slider2");
const btn2 = document.querySelector(".lee .btn2");
const box2 = document.querySelector(".lee .under_box2");

btn2.addEventListener("click", function () {
  if (clicked2 === 0) {
    slider2.style.transform = "translateY(-10vw)";
    btn2.style.transform = "translateY(-10vw)";
    box2.style.opacity = 1;
    clicked2 = 1;
  } else {
    slider2.style.transform = "translateY(0vw)";
    btn2.style.transform = "translateY(0vw)";
    box2.style.opacity = 0;
    clicked2 = 0;
  }
});

const slider3 = document.querySelector(".lee .slider3");
const btn3 = document.querySelector(".lee .btn3");
const box3 = document.querySelector(".lee .under_box3");

btn3.addEventListener("click", function () {
  if (clicked3 === 0) {
    slider3.style.transform = "translateY(-10vw)";
    btn3.style.transform = "translateY(-10vw)";
    box3.style.opacity = 1;
    clicked3 = 1;
  } else {
    slider3.style.transform = "translateY(0vw)";
    btn3.style.transform = "translateY(0vw)";
    box3.style.opacity = 0;
    clicked3 = 0;
  }
});



//******************************CROATIA사진 JS************************************ */



const dub = document.querySelector(".lee .under_box1 .best_place .dub");
const dub_img = document.querySelector(".lee .under_box1 .dub_pic img");

dub.addEventListener("click",function(){
    dub_img.style.opacity = 1;
    dub_img.style.zindex = 2;

    flit_img.style.zindex = 1;
    split_img.style.zindex = 1;

})


const flit = document.querySelector(".lee .under_box1 .best_place .flit");
const flit_img = document.querySelector(".lee .under_box1 .flit_pic img");

flit.addEventListener("click",function(){
    flit_img.style.opacity = 1;
    flit_img.style.zindex = 2;

    dub_img.style.zindex = 1;
    split_img.style.zindex = 1;
})

const split = document.querySelector(".lee .under_box1 .best_place .split");
const split_img = document.querySelector(".lee .under_box1 .split_pic img");


split.addEventListener("click",function(){
    split_img.style.opacity = 1;
})





//********************************USA 사진 JS************************************* */

const grand = document.querySelector(".lee .under_box2 .best_place2 .grand");
const grand_img = document.querySelector(".lee .under_box2 .grand_pic img");

grand.addEventListener("click",function(){
    grand_img.style.opacity =1;
})

const lasvegas = document.querySelector(".lee .under_box2 .best_place2 .lasvegas");
const lasvegas_img = document.querySelector(".lee .under_box2 .lasvegas_pic img");

lasvegas.addEventListener("click",function(){
    lasvegas_img.style.opacity =1;
})

const walt = document.querySelector(".lee .under_box2 .best_place2 .walt");
const walt_img = document.querySelector(".lee .under_box2 .walt_pic img");

walt.addEventListener("click",function(){
    walt_img.style.opacity =1;
})



//******************************SWITZERLAND 사진 JS******************************* */

const interlaken = document.querySelector(".lee .under_box3 .best_place3 .interlaken");
const interlaken_img = document.querySelector(".lee .under_box3 .interlaken_pic img");

interlaken.addEventListener("click",function(){
    interlaken_img.style.opacity =1;
})

const jungfrau = document.querySelector(".lee .under_box3 .best_place3 .jungfrau");
const jungfrau_img = document.querySelector(".lee .under_box3 .jungfrau_pic img");

jungfrau.addEventListener("click",function(){
    jungfrau_img.style.opacity =1;
})

const luzern = document.querySelector(".lee .under_box3 .best_place3 .luzern");
const luzern_img = document.querySelector(".lee .under_box3 .luzern_pic img");

luzern.addEventListener("click",function(){
    luzern_img.style.opacity =1;
})
