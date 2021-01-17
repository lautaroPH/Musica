const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const playPause = document.getElementById("play");
const playPause2 = document.getElementById("play2");
const playPause3 = document.getElementById("play3");
const playPause4 = document.getElementById("play4");
const playPause5 = document.getElementById("play5");
const playPause6 = document.getElementById("play6");


document.addEventListener(`DOMContentLoaded`, () =>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 250,
        dist: -50,
        shift: 5,
        numVisible: 5,
    });
})


const play = (comenzar,musica)=> {
    comenzar.addEventListener("click", () => {
        if (musica.paused || musica.ended) {
            comenzar.querySelector(".pause-btn").classList.toggle("hide");
            comenzar.querySelector(".play-btn").classList.toggle("hide");
            musica.play();
        } else {
            musica.pause();
            comenzar.querySelector(".pause-btn").classList.toggle("hide");
            comenzar.querySelector(".play-btn").classList.toggle("hide");
        }
    });
}

play(playPause,audio);
play(playPause2,audio2);
play(playPause3,audio3);
play(playPause4,audio4);
play(playPause5,audio5);
play(playPause6,audio6);