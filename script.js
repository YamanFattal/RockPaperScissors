function getComputerChoice (){
    let randNum = Math.random();
    if (0 <= randNum < 0.3){
        return "Rock";
    }

    else if(0.3 <= randNum < 0.7){
        return "Paper";
    }
    
    else {
        return "Scissors";
    }
}

