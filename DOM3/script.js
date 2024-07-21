const main = document.querySelector("#main");
const i = document.querySelector("i");

main.addEventListener("mousemove", (e) => {

    i.style.position = "absolute";
    i.style.left = e.x + 'px';
    i.style.top = e.y + 'px';
});

