let arr = [
    "https://images.news18.com/ibnlive/uploads/2023/05/fotojet-37-2.jpg",
    "https://w0.peakpx.com/wallpaper/480/429/HD-wallpaper-sonam-bajwa-actress.jpg",
    "https://1847884116.rsc.cdn77.org/tamil/gallery/actress/sonambajwa151014/sonambajwa220720_4.jpg",
    "https://www.hindustantimes.com/ht-img/img/2023/04/29/1600x900/sonam_bajwa_1682734895526_1682734895750.jpg",
    "https://static.wixstatic.com/media/8f8ca8_c4a193bbc6984e5cbe47d099ea7bd65b~mv2.jpg/v1/fill/w_480,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f8ca8_c4a193bbc6984e5cbe47d099ea7bd65b~mv2.jpg",
    "https://images.indianexpress.com/2023/05/sonam-bajwa-bollywood-debut.jpg",
    "https://www.bollywoodhungama.com/wp-content/uploads/2023/05/Sonam_Bajwa.jpeg",
    "https://i.pinimg.com/736x/78/5c/fe/785cfecca10c482048622549c19a4422.jpg",
    "https://m.media-amazon.com/images/M/MV5BYjc0ZjgxN2QtMjkxMC00NDQ1LTgyZjEtMDRmMzUzYzYxMGIxXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_FMjpg_UX1080_.jpg",
]

const storiyan = document.querySelector("#storiyan");
let clutter = "";
const fullScreen = document.querySelector("#full-screen");

arr.forEach(function(elem, index) {
    clutter += `
        <div class="story"> 
            <img id="${index + 1}" src="${elem}" alt="Sonam${index + 1}">
        </div>
    `;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", (dets) => {
    fullScreen.style.backgroundImage = `url(${dets.target.src})`;
    fullScreen.style.display = "block";

    setTimeout(() => {
        fullScreen.style.display = "none";
    }, 1000)
});


