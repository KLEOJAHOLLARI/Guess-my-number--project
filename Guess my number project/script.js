'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
document.querySelector('.kleo').textContent = 'Made By kleo Jahollari';
document.querySelector('h1').textContent = 'Find my number 1-20';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
 
    // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' No Number ⛔';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Coorect Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is so high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '☝ Too high!';

      document.querySelector('.score').textContent = score;
      score--;

    } else {
      document.querySelector('.message').textContent = '😞You lose this game';
    }

    // When guess is so Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👇 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose this game';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.message') = textContent = 'too low'
    
  }
});

document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secretNumber - Math.trunc(Math.random() * 20) +1
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('.again').style.backgroundColor= '#fff';
    document.querySelector('.body').style.backgroundColor= '#222';
    document.querySelector('.again').style.width = '20rem';
})