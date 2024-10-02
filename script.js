const playbutton = document.getElementById('play-button');

playbutton.addEventListener('click', () => {
    const audio = new Audio('cute-happy-birthday.mp3');
    audio.play(); 
});