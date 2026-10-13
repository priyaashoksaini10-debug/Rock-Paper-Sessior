let userScore = 0;
let compScore = 0;

let winSound = document.getElementById("winSound");
let lostSound = document.getElementById("lostSound");
let overSound = document.getElementById("overSound");
let clickSound = document.getElementById("clickSound");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper","scissors"]; 
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]; 
};

const overGame= () =>{
    msg.innerText = "Game Over. Play again";
    msg.style.backgroundColor = "#3f334d";
    overSound.play();
}; 

const showWinner = (userWin,userChoice,compChoice) =>{
      if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        winSound.play();
        msg.style.backgroundColor = "green";
        msg.style.border = "3px solid #424b54"
      }
      else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ! ${compChoice} beats your ${userChoice}`;
        lostSound.play();
        msg.style.backgroundColor = "red";
        msg.style.border = "3px solid #e1ce7a"
      }
};
const playGame = (userChoice) =>{
    console.log("user Choice = ",userChoice);
    // give computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        overGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors"?false : true;

        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        clickSound.play();
        playGame(userChoice);

    });
});

