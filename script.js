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

function playRound(humanChoice,computerChoice){
    humanScore=0,computerScore=0;
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
    // console.log(humanScore,computerScore);
    
    if(computerScore){
        return 'computer'
    }
    else if(humanScore) return 'human'
 }

 newDiv=document.createElement('div')
 human=document.createElement('div')
 computer=document.createElement('div')
 
 newDiv.setAttribute('class','container')
 human.setAttribute('id','human')
 computer.setAttribute('id','computer')
 document.body.appendChild(newDiv)
 
 newDiv.append(human,computer)

 let hScore=0,cScore=0;
 human.textContent=`You - ${hScore}`
 computer.textContent=`Computer - ${cScore}`



rock=document.getElementById('rock')
paper=document.getElementById('paper')
scissors=document.getElementById('scissors')

function callBack(e){
    wl=playRound(e.target.textContent,getComputerChoice())
    if(wl=='human'){
        hScore++
        human.textContent=`You - ${hScore}`
        if(hScore==5){
            alert("YOU WON!!!")
        }
    }
    else if(wl=='computer'){
        cScore++;
        computer.textContent=`Computer - ${cScore}`
        if(cScore==5){
            alert("COMPUTER WON !!!!!")
        }
    }

}

rock.addEventListener('click',callBack)

paper.addEventListener('click',callBack)

scissors.addEventListener('click',callBack)

 