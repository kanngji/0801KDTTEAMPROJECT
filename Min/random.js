
AOS.init({
    offset: 550,
    duration: 900,
});


//이미지 불러오기
image_array = [`planet1.png`, `planet2.png`, `planet3.png`, `planet4.png`, `planet5.png`, `planet6.png`]

function get_random_image() {

    //랜덤 index 가져오기
    random_index = Math.floor(Math.random() * image_array.length);

    //이미지를 랜덤 인댁스로 받기
    selected_image = image_array[random_index]

    //이미지 보여지기

    setTimeout(() => {
        shower.src = `./images/${selected_image}`
    }, 2000);
}

const mainbtn = document.querySelector(".main_btn");
const restartbtn = document.querySelector(".restart_btn");
const loading = document.querySelector(".loading");
const shower = document.querySelector("#image_shower");

mainbtn.addEventListener("click",function() {
    loading.style.opacity = 1;
    shower.style.display = "block";
    get_random_image();



})

restartbtn.addEventListener("click",function() {
    loading.style.opacity = 0;
    shower.style.display ="none";
    shower.src = "";
})