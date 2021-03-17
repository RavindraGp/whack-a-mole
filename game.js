let score=0;
let interval;
window.addEventListener("load", () => {
    initGame()
})

initGame  = ()=>{
    document.querySelectorAll('.mole').forEach((element)=>{
        element.addEventListener('click',(event)=>{
            if(event.target.classList.contains('active')){
                score++;
                setScoreValue(score)
            }
        })
    })
}

startGame = ()=>{
    stopGame();
    interval = setInterval(()=>{
        const random = parseInt(Math.random() * 8);
        removeActiveClass();
        const moleElements = document.getElementsByClassName('mole');
        moleElements[random].classList.add('active')
    },700)
}

stopGame = ()=>{
    if(!!interval){
        clearInterval(interval)
        interval=null;
        removeActiveClass();
    }
}

resetGame = ()=>{
    removeActiveClass();
    score=0;
    stopGame();
    setScoreValue(0)
}

removeActiveClass = ()=>{
    const boxes = document.getElementsByClassName('mole');

    for(let i=0;i<boxes.length;i++){
        boxes[i].classList.remove('active')
    }
}

setScoreValue = (score)=>{
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML=score;
}