let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice')

//getting computer choice function

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

//draw game 

function drawGame() {
   console.log('Game was draw')
}
//main playgame function logic
const playGame = (userchoice)=>{

console.log('userchoice = ', userchoice);
const compchoice = getComputerChoice();
console.log('compchoice = ', compchoice);

//comparing choices

if(userchoice === compchoice){
    drawGame();
    document.getElementById('message').innerText = 'It is a tie! both choosed same ';
    document.getElementById('message').style.backgroundColor = 'blue'
} else if(
    (userchoice === 'rock' && compchoice ==='scissor') ||
    (userchoice === 'paper' && compchoice === 'rock') ||
    (userchoice ==='scissor' && compchoice === 'paper')
){
    userScore++;
    console.log('User wins!');
    document.getElementById('message').innerText = 'You win! because comp choosed ' + compchoice ;
    document.getElementById('message').style.backgroundColor = 'green'
} else {
    compScore++;
    console.log('Computer wins!');
    document.getElementById('message').innerText = 'Computer wins! because comp choosed ' + compchoice;
    document.getElementById('message').style.backgroundColor ='red'
}

document.getElementById('user_score').innerText = userScore;

document.getElementById('computer_score').innerText = compScore;


}

//getting choices funtion 
choices.forEach((choice)=>{
    choice.addEventListener('click' ,  ()=>{
        const userchoice = choice.getAttribute('id');
        playGame(userchoice)
    })
})