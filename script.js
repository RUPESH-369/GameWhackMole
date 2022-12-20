const squareDivs = document.querySelectorAll('.square');
const startButton = document.querySelector('.start');
const level = document.querySelector('.difficulty');
const decreasingTime = document.querySelector('.decreasing-time');
const score = document.querySelector('.score');
const over = document.querySelector('.over');
const end = document.querySelector('.end');

// console.log(squareDivs);
let gameScore = 0;
let gameTime = 10;
let selectRandomSquareTimer;
let decreaseTimeTimer;

squareDivs.forEach((squareDiv) => {
    squareDiv.onclick = () => {
        console.log('id is', squareDiv.classList.contains('mole-image'));
        if(squareDiv.classList.contains('mole-image') && gameTime > 0){
            gameScore = gameScore+1
            score.innerText = gameScore;
        }
    }
})

const selectRandomSquare = () => {
    squareDivs.forEach((squareDiv) => {
        squareDiv.classList.remove('mole-image');
    })
    const randomSelectedDiv = squareDivs[Math.floor(Math.random()*9)]
    randomSelectedDiv.classList.add('mole-image')
}

const decreaseTime = () => {
    gameTime = gameTime-1
    decreasingTime.innerText = gameTime;
    if(gameTime === 0){
        clearInterval(selectRandomSquareTimer);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over'
        startButton.disabled = false
    }
}

end.onclick = () => {
    clearInterval(selectRandomSquareTimer);
        clearInterval(decreaseTimeTimer);
        over.innerText = 'Game Over'
        startButton.disabled = false
        gameTime = 11
}

startButton.onclick = () => {
    console.log(level.value);
    let intervalTime;
    if(level.value === 'easy'){
        intervalTime = 800
    } else if(level.value === 'medium'){
        intervalTime = 600
    } else if(level.value === 'hard'){
        intervalTime = 400
    } else{
        intervalTime = 800
    }
    gameTime = 11
    selectRandomSquareTimer = setInterval(selectRandomSquare, intervalTime);
    console.log(intervalTime);
    console.log(level.value);
    decreaseTimeTimer = setInterval(decreaseTime, 1000);
    console.log('selectRandomSquareTimer', selectRandomSquareTimer);
    console.log('decreaseTimeTimer', decreaseTimeTimer);
    startButton.disabled = true;
    over.innerText = ''
}
