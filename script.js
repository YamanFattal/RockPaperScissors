function getComputerChoice (){
    let randNum = Math.random();
    if (0 <= randNum < 0.3){
        return "rock";
    }

    else if(0.3 <= randNum < 0.7){
        return "paper";
    }
    
    else {
        return "scissors";
    }
}

function getHumanChoice (){
   let choice = prompt("rock ,paper or scissors?");
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound(getComputerChoice, getHumanChoice){
    const com = getComputerChoice();
    const hum = getHumanChoice().toLowerCase();
    if(com == hum){
        console.log("its a tie");
    }
    
    else if(com == "rock" && hum == "scissors"){
        console.log("you lost this round!");
        computerScore ++;
    }

    else if(com == "rock" && hum == "paper"){
        console.log("you won this round!");
        humanScore ++;
    }

    else if(com == "paper" && hum == "scissors"){
        console.log("you won this round!");
        humanScore ++;
    }

    else if(com == "paper" && hum == "rock"){
        console.log("you lost this round!");
        computerScore ++;
    }

    else if(com == "scissors" && hum == "rock"){
        console.log("you win this round!");
        humanScore ++;
    }
    
    else if(com == "scissors" && hum == "paper"){
        console.log("you lost this round!");
        computerScore ++;
    }
    console.log("computer :" + com);
    console.log("Human :" + hum);
}

function playGame(){
    for(let i = 0; i < 5; i++) {
        playRound(getComputerChoice, getHumanChoice);
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
    }

    if(computerScore > humanScore){
        console.log("you lost the game!");
    }
    else{
        console.log("you won the game!");
    }
}

//playRound(getComputerChoice, getHumanChoice);
playGame();