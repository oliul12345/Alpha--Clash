// function enter(){
//     addHiddenAttribute('play')
//     hiddenClassRemove('alpha')
//     playGame()
    
//     setBtnBgColor(alphabet)
// }


function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}


////   keyBoard events below here //////////
function handleKeyUp(event){
    const expectedKey = event.key

    console.log('expected key is',expectedKey)
    const currentPlayerKey = document.getElementById('current-alphabet')
    const currentPlayerKeyText = currentPlayerKey.innerText;
    const currentPlayerKeyTextConvert = currentPlayerKeyText.toLowerCase()
    console.log('current is', currentPlayerKeyTextConvert)

    if(expectedKey === currentPlayerKeyTextConvert){
        console.log('You got a point');
        // get current score //////////
        const getCurrentScoreId = document.getElementById('score-id')
        const getCurrentScoreText = getCurrentScoreId.innerText;
        const currentScore = parseInt(getCurrentScoreText)
        console.log(typeof(currentScore))
        ////  set the new score ////////
        const newScore = currentScore + 1 ;
        getCurrentScoreId.innerText = newScore;
        console.log(newScore)

        removeBackgroundColorById(currentPlayerKeyTextConvert)
        continueGame()
    }
    else{
        console.log('dur o mia ke korso')
        ///  get the life text 
        const currentLifeId = document.getElementById('life-id');
        const getCurrentLife = currentLifeId.innerText;
        const currentLife = parseInt(getCurrentLife);
        console.log('current life',currentLife)
        ///  set the life after decrease 
        const newLife = currentLife - 1;
        currentLifeId.innerText = newLife;

        if(newLife === 0){
            console.log('game over')
            hideElementById('play-ground');
            showElementById('show-score');
        }
    }

}
document.addEventListener('keyup',handleKeyUp)


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function playAgain(){
    hideElementById('show-score');
    showElementById('home-screen');
    
}