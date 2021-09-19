
// generate random number from 1 to 6 //
const firstRandomNum = Math.floor (Math.random()*6 ) + 1

// image dice1 ect is generated
const firstDiceimage = 'images/dice' + firstRandomNum + '.png'; 
document.querySelectorAll('img')[0].setAttribute ('src', firstDiceimage);



const secondRandomNum = Math.floor (Math.random()*6 ) + 1
const secondDiceimage = 'images/dice' + secondRandomNum + '.png'; 
document.querySelectorAll('img')[1].setAttribute ('src', secondDiceimage);