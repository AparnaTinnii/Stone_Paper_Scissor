let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const comp = document.querySelector(".comp-choice");
const compText = document.querySelector("#comp");
const msg = document.querySelector(".msg-container")

const userval = document.querySelector("#user");
const compval = document.querySelector("#computer");

const showWinner= (userWin) =>{
    if(userWin === true){
        console.log("User is Winner");
        userScore++;
        userval.innerText=userScore;
        result.innerText = "You win"
        result.style.backgroundColor="green";
        result.style.color="white";
    }else{
        console.log("Computer is Winner");
        compScore++;
        compval.innerText = compScore;
        result.innerText = "you loss !!"
        result.style.backgroundColor="red";
        result.style.color="white";
    }
};

const drawGame = () =>{
    console.log("Game was Draw");
    result.innerText = "Game is Draw"
    result.style.backgroundColor="rgb(187, 168, 168)";
    result.style.color="white";

};

const genCompChoice = () =>{  //Generate computer choice
    const option =["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    comp.classList.remove("hide");
    compText.innerText = `Computer Choice: ${option[randidx]}` 
    return option[randidx];

};

const playGame =(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);


    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compurtChoice = "Scissor", "paper"
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            //computerChoice = "Scissor","rock"
            userWin = compChoice === "scissor" ? false:true;
        }
        else{
            //computerChoice == "paper","rock"
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });

});