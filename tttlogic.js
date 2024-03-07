let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newgame= document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg");
let msg= document.querySelector("#win-msg");

let turn0=true;

const winPattterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText ="O";
            turn0=false;
        }else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        

    });

});
const disableButtons=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
}
const enableButtons=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
}
const checkWinner = () => {
    for(let patterns of winPattterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;
        
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }
}
const resetGame = () => {
    turn0=true;
    enableButtons();
    msgContainer.classList.add("hide");
}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);