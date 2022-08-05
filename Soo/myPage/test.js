const div = document.querySelectorAll("div");

for (let i = 1; i <= div.length; i++) {
  let height = Math.floor(Math.random() * 10);
  div[`${i - 1}`].classList.add(`asteriod${i}`);
  div[`${i - 1}`].style.width = "parseInt(Math.random()*100)vw";
  div[`${i - 1}`].style.height = `${height}vw`;
  div[`${i - 1}`].style.backgroundColor = "gray";
  console.log(Math.floor(Math.random() * 100));
  console.log(div[`${i - 1}`].style);
}
