const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");
const audio7 = document.getElementById("audio7");
const audio8 = document.getElementById("audio8");
const audio9 = document.getElementById("audio9");
const playPause = document.querySelector(".rock");
const playPause2 = document.getElementById("pop-musica");
const playPause3 = document.getElementById("electro-musica");
const playPause4 = document.getElementById("jazz");
const playPause5 = document.getElementById("hip-hop");
const playPause6 = document.getElementById("folk");
const playPause7 = document.getElementById("clasica");
const playPause8 = document.getElementById("punk");
const playPause9 = document.getElementById("ambiental");
const boton = document.getElementById("boton");

boton.addEventListener("click", ()=> {
    boton.style.display = "none";
})

const play = (reproducir,musica)=> {
    reproducir.addEventListener("mouseover", () =>{
        if (musica.paused || musica.ended) {
            musica.play()
        }
    })
}

const pausar = (reproducir,musica)=> {
    reproducir.addEventListener("mouseout", () =>{
        if (musica.played) {
            musica.pause();
        }
    })
}



play(playPause,audio);
play(playPause2,audio2);
play(playPause3,audio3);
play(playPause4,audio4);
play(playPause5,audio5);
play(playPause6,audio6);
play(playPause7,audio7);
play(playPause8,audio8);
play(playPause9,audio9);

pausar(playPause,audio);
pausar(playPause2,audio2);
pausar(playPause3,audio3);
pausar(playPause4,audio4);
pausar(playPause5,audio5);
pausar(playPause6,audio6);
pausar(playPause7,audio7);
pausar(playPause8,audio8);
pausar(playPause9,audio9);
