const sound = new Audio('../src/cancion.wav');

const play = document.querySelector('.reproductor__play');
const pausa = document.querySelector('.reproductor__pause');
const fondoBtn = document.querySelector('.reproductor');

play.addEventListener('click', () => {
    sound.play();
    play.style.display = 'none';
    pausa.style.display = 'block';
    fondoBtn.style.backgroundColor = 'var(--secondary-color)';
});

pausa.addEventListener('click', () => {
    sound.pause();
    play.style.display = 'block';
    pausa.style.display = 'none';
    fondoBtn.style.backgroundColor = 'var(--primary-color)';
    
});