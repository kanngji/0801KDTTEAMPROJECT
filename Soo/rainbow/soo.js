const mainGroup = document.querySelector(".svg-main");
const mainPaths = mainGroup.querySelectorAll("path");

mainPaths.forEach((path, index) => {
    const length = path.getTotalLength();
    path.style.setProperty("--length", length);
    path.style.setProperty("--delay", index * 100 + "ms");
    path.style.setProperty("--duration", length * 5 + "ms");
});

const bgGroup = document.querySelector(".svg-bg");
const bgPaths = bgGroup.querySelectorAll("path");

bgPaths.forEach((path, index) => {
    const length = path.getTotalLength();
    path.style.setProperty("--length", length);
    path.style.setProperty("--delay", index * 100 + "ms");
    path.style.setProperty("--duration", length * 5 + "ms");
});
