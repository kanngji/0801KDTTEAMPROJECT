const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;
  console.log(maxX, maxY);
  const panX = maxX * xDecimal * -1,
    panY = maxY * yDecimal * -1;

  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 4200,
      fill: "forwards",
      easing: "ease",
    }
  );
};

// function view(){
// 	const img = document.querySelectorAll('.img');
//  	const winTop = document.documentElement.scrollTop;

//   img.forEach((i) => {
//   	const imgTop = i.offsetTop-100;

//     if( imgTop <= winTop )
//     	i.classList.add('on')
//   });
// }

// window.addEventListener('scroll', () => {
// 	view()
// })

// const character = document.querySelector('.img');

//   let degree = 0;
//   loop();

//   function loop(){

//   	const rotation = (degree * Math.PI) / 180;
//     const targetX = window.innerWidth / 2 + 80 * Math.cos(rotation) - 10;
//     const targetY = window.innerHeight / 2 + 80 * Math.sin(rotation) - 10;

//     character.style.left = `${targetX}px`;
//     character.style.top = `${targetY}px`;

//     degree += 1;

//     requestAnimationFrame(loop);
//   }

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

// const logo = document.querySelector(".logo");
// const liEl = document.querySelector("ul");
// const imgEl = document.querySelectorAll(".navigation ul li a img");

// let logoClick = 0;
// if (logoClick == 0) {
//   for (let i = 0; i < 5; i++) {
//     imgEl[i].setAttribute("style", "display: none;");
//   }
//   liEl.setAttribute("style", "display: none;");
// }
// logo.addEventListener("click", function () {
//   if (logoClick == 0) {
//     for (let i = 0; i < 5; i++) {
//       imgEl[i].setAttribute("style", "display: block;");
//     }
//     liEl.setAttribute("style", "display: block;");

//     liEl.style.animation = "move0 1s forwards ease";
//     logoClick = 1;
//   } else if (logoClick == 1) {
//     liEl.style.animation = "";
//     liEl.style.animation = "fade 1s forwards ease";
//     logoClick = 0;
//   }
// });
