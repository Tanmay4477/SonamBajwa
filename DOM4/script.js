const elem = document.querySelectorAll(".elem");

elem.forEach((value) => {
    value.addEventListener("mouseenter", () => {
        value.childNodes[3].style.opacity = 1;
    });

    value.addEventListener("mouseleave", () => {
        value.childNodes[3].style.opacity = 0;
    });

    value.addEventListener("mousemove", (e) => {
        value.childNodes[3].style.left = e.x+"px";
    });
});

