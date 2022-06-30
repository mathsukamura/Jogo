const sonic = document.querySelector('.sonic');
const eggman = document.querySelector('.eggman');

const jump =() => {
    sonic.classList.add('jump');

    setTimeout(( ) => {

        sonic.classList.remove('jump');

    }, 1000);  
   
}

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');

    if(eggmanPosition <= 200 && eggmanPosition > 0  && sonicPosition < 115){
        eggman.style.animation = 'none';
        eggman.style.left = `${eggmanPosition}px`;
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src= '../image/icone sonic.png';
    
        clearInterval(loop);
        alert("GAMEOVER!!!");
    }

}, 10)

document.addEventListener('keydown', jump);