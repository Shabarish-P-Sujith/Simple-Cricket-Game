let userChoice,computerChoice,resultMsg;

function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber>0 && randomNumber<=1) {
        computerChoice = 'Bat';
    } else if (randomNumber>1 && randomNumber<=2) {
        computerChoice = 'Ball';
    }else if (randomNumber>2 && randomNumber<=3) {
        computerChoice = 'Stump';
    }    
}

let score = {
    win: 0,
    lose: 0,
    tie: 0,
};

function choice(userChoice,computerChoice){
    if (userChoice === 'Bat') {
        if (computerChoice === 'Bat') {
            resultMsg = '!!! DRAW !!!'; 
            score.tie++;
        }else if (computerChoice === 'Ball') {
            resultMsg = 'User WON the Game';
            score.win++;
        }else if (computerChoice === 'Stump') {
            resultMsg = 'Computer WON the Game';
            score.lose++;
        }
    } 
    else if (userChoice === 'Ball') {
        if(computerChoice === 'Bat'){
            resultMsg = 'Computer WON the Game';
            score.lose++;
        }else if(computerChoice === 'Ball'){
            resultMsg = '!!! DRAW !!!';
            score.tie++;
        }else if(computerChoice === 'Stump'){
            resultMsg = 'User WON the Game';
            score.win++;
        }
    } 
    else if (userChoice === 'Stump') {
        if(computerChoice === 'Bat'){
            resultMsg = 'User WON the Game';
            score.win++;
        }else if(computerChoice === 'Ball'){
            resultMsg = 'Computer WON the Game';
            score.lose++;
        }else if(computerChoice === 'Stump'){
            resultMsg = '!!! DRAW !!!';
            score.tie++;
        }
    } 
}

function finalChoice(userChoice) {
    console.log(`You have chose ${userChoice}`);
    generateComputerChoice();
    console.log(`Computer has chose ${computerChoice}`);
    choice(userChoice,computerChoice);
    console.log(resultMsg);
    console.log(score); console.log('\n');    
}