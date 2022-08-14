const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  console.log(maxX, maxY)
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate ({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4200,
    fill: "forwards",
    easing: "ease"
  })
}   


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

