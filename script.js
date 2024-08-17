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

function choice(userChoice,computerChoice){
    if (userChoice === 'Bat') {
        if (computerChoice === userChoice) {
            resultMsg = '!!! DRAW !!!';
        }else if (computerChoice === 'Ball') {
            resultMsg = 'User WON the Game';
        }else if (computerChoice === 'Stump') {
            resultMsg = 'Computer WON the Game';
        }
    } 
    else if (userChoice === 'Ball') {
        if(computerChoice === 'Bat'){
            resultMsg = 'Computer WON the Game';
        }else if(computerChoice === userChoice){
            resultMsg = '!!! DRAW !!!';
        }else if(computerChoice === 'Stump'){
            resultMsg = 'User WON the Game';
        }
    } 
    else if (userChoice === 'Stump') {
        if(computerChoice === 'Bat'){
            resultMsg = 'User WON the Game';
        }else if(computerChoice === 'Ball'){
            resultMsg = 'Computer WON the Game';
        }else if(computerChoice === userChoice){
            resultMsg = '!!! DRAW !!!';
        }
    } 
}
