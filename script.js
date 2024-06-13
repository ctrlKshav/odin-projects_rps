console.log('hi rps')
function getComputerChoice(){
    num=Math.trunc(Math.random()*100)
    if(num>=0 && num<33) return "rock"
    else if(num>=33 && num<66) return "paper"
    else return "scissors"
}
// console.log(getComputerChoice())

function getHumanChoice(){
    user=prompt("Enter Your Hand")
    return user;
}
// console.log(getHumanChoice());

humanScore=computerScore=0;

function playRound(humanChoice,computerChoice){
    humChoice=humanChoice.toLowerCase()
    comChoice=computerChoice
    w='win',l='lose'
    if(humChoice=='rock' && comChoice=='paper'){
        console.log(`You ${l}! ${comChoice} beats ${humChoice}.`);
        computerScore+=1
    }
    else if(humChoice=='rock' && comChoice=='scissors'){
        console.log(`You ${w}! ${humChoice} beats ${comChoice}.`);
        humanScore+=1
    }
    else if(humChoice=='rock' && comChoice=='rock'){
        console.log("Tie");
    }
   
    else if(humChoice=='paper' && comChoice=='paper'){
        console.log("Tie");
        }
    else if(humChoice=='paper' && comChoice=='scissors'){
        console.log(`You ${l}! ${comChoice} beats ${humChoice}.`);
        computerScore+=1

        }
    else if(humChoice=='paper' && comChoice=='rock'){
        console.log(`You ${w}! ${humChoice} beats ${comChoice}.`);
        humanScore+=1
    }

    else if(humChoice=='scissors' && comChoice=='paper'){
        console.log(`You ${w}! ${humChoice} beats ${comChoice}.`);
        humanScore+=1
        }
    else if(humChoice=='scissors' && comChoice=='scissors'){
        console.log("Tie");

        }
    else if(humChoice=='scissors' && comChoice=='rock'){
        console.log(`You ${l}! ${comChoice} beats ${humChoice}.`);
        computerScore+=1
        
    }
   
    }
playRound(getHumanChoice(),getComputerChoice())
