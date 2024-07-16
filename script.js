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
   let choice = prompt("rock,paper or scissors?");
    return choice;
}

let computerScore = 0;
let humanScore = 0;