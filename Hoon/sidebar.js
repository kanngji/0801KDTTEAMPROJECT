const logoToggle = document.querySelector(".logo");
const navigation = document.querySelector(".navigation");

logoToggle.onclick = function () {
  navigation.classList.toggle("open");
};
