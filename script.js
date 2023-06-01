
let secretNumber = Math.floor(Math.random() * 20) + 1;
const checkButton = document.getElementById('checkbtn');
let message = document.getElementById('resultmesg');
const gusseing = document.getElementById('gusseing');
const resetButton = document.getElementById('resetbtn');

checkButton.addEventListener('click', function () {
    gusseNumber();
})
resetButton.addEventListener('click', function () {
    resetGame();
})
//when check button has preseed
let score = 20;
let highscore = 0;
function gusseNumber() {
    let guess = Number(document.querySelector('.guess').value);

    //when There is no number
    if (!guess) {
        message.textContent = '⛔ No Number!';
    }
    //when plyer wins
    else if (guess === secretNumber) {
        message.textContent = '🏆 Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        gusseing.textContent = secretNumber;
        document.querySelector('.highscore').textContent = score;
        document.querySelector('h1').textContent = 'Good Guess!';
         if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when the guess is high
    else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = '👎💥 Game Over, You Lost the Game!!'
            document.querySelector('h1').textContent = 'Sorry, You can try again!';
        }

    }
    //when the guess is low
    else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = '👎💥 Game Over, You Lost the Game!!'
            document.querySelector('h1').textContent = 'Sorry, You can try again!';
        }
    }
}

//when Again button has pressed
function resetGame() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    message.textContent = 'Start guessing....';
    document.querySelector('.number').textContent = '?';

    document.querySelector('h1').textContent = 'Guess My Number!';

    document.querySelector('body').style.backgroundColor = '#222';
}
