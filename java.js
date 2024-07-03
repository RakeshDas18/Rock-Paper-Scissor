let userScore=0;
let computerScore=0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector(".msg");
const userScores=document.querySelector(".userScore");
const computerScores=document.querySelector(".computerScore");

//Computer Generate

const genComputerOption = () =>{
    const choice=["ROCK", "PAPER", "SCISSOR"];
    const randomIdx = Math.floor(Math.random()*3);
    return choice[randomIdx];
}   

//Draw Game

const drawGame=()=>{
    console.log("Game was draw!");
    msg.innerText = "DRAW. PLAY AGAIN";
    msg.style.backgroundColor="Black";
    msg.style.color="White";
}

//Win

showWinner = (userWin, userOption, computerOption) =>{
    if(userWin){
        userScore++;
        userScores.innerText=userScore;
        msg.innerText = `YOU WIN! ${userOption} BEATS ${computerOption}`;
        msg.style.backgroundColor="Green";
        msg.style.color="White";
    } else {
        computerScore++;
        computerScores.innerText=computerScore;
        console.log("You Lose");
        msg.innerText = `YOU LOSE! ${computerOption} BEATS ${userOption}`;
        msg.style.backgroundColor="Red";
        msg.style.color="White";
    }
}

//Game

const playGame = (userOption) =>{
    console.log("User option is ", userOption);
    const computerOption=genComputerOption();
    console.log("Computer option is ", computerOption);

    if(computerOption===userOption){
        drawGame();
    } else {
        let userWin = true;
        if(userOption=== "ROCK"){
           userWin = computerOption==="PAPER" ? false : true;
        } else if (userOption === "PAPER"){
            userWin = computerOption==="SCISSOR" ? false : true;
        } else {
            userWin = computerOption==="ROCK" ? false : true;
        }
        showWinner(userWin, userOption, computerOption);
    }
} 


options.forEach((option)=>{
    option.addEventListener("click", () => {
        const userOption = option.getAttribute("id");
        playGame(userOption)
    })
})
