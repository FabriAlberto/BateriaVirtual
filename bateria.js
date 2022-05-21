const keys = document.querySelectorAll(".key")

/* function que remueve la transicion de cada key */
const removerTransicion = (e) => {
    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');

}
/* function que reproduce el sonido, primero definimos la variabla audio, seleccionando el elemento audio 
dependiendo de la tecla que toque el usuario, luego seleccionamos el div que envuelve esta tecla , si no hay
audio retorna undefined , y sino agrega la class playing a key para el transform, definimos el tiempo y damos play
al elemento audio ya antes seleccionado */
const playMusic = (e) => {
    /*    console.log(e.keyCode) */
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const playMusicPhone = (e) => {
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    const key = document.querySelector(`button[data-key="${e}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


keys.forEach(key => key.addEventListener('transitionend', removerTransicion));

window.addEventListener('keydown', playMusic);

const vaciarText = () => {
   console.log(`pantalla de  ${screen.width}`)
    keys.forEach(key => key.innerHTML = "<br> <br> <br> <br> <br>")
}
screen.width < 700 ? vaciarText() : console.log("pantalla de", screen.width);


