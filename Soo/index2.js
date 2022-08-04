const asteriod = document.querySelector(".asteriod");

asteriod.addEventListener("mouseenter", function (e) {
    if ((asteriod.src = "./asteroid2.png")) {
        asteriod.src = "./broken-asteroid.png";
        asteriod.style = "width: 18em; height: 18em;";
    }
});
