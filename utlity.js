// function addHiddenAttribute(id){
//  const getId = document.getElementById(id);
//  getId.classList.add('hidden')
// //  console.log(getId.classList)
// }

// function hiddenClassRemove(id){
//     const getId = document.getElementById(id)
//     console.log(getId.classList)
//     getId.classList.remove('hidden')
// }

// function setBtnBgColor(id){
//     const getId = document.getElementById(id)
//     getId.classList.add('bg-red-400');

//     const currentAlphabet = document.getElementById('current-alphabet')
//     currentAlphabet.innerText = alphabet;
// }

// function playGame(){
//     const letter = 'abcdefghijklmnopqrstuvwxyz';
//     const divibeLetter = letter.split('');
//     // console.log(divibeLetter)

//     const index = Math.floor(Math.random() * 24);
//     const alphabet = divibeLetter[index]
//     // console.log(alphabet)

//     ////  show the alphabet this part 
//     const currentAlphabet = document.getElementById('current-alphabet')
//     currentAlphabet.innerText = alphabet;

// }

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}