let boxes =  document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let result =  document.querySelector("#resultText");
let turnX = true;
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
let winner = false;


// check-winner function:
function checkwinner(turnX) {
for(let i=0;i<8;i++){
    for(let j=0;j<1;j++){
        if(boxes[winningCombinations[i][j]].innerText===boxes[winningCombinations[i][j+1]].innerText
             && boxes[winningCombinations[i][j+1]].innerText===boxes[winningCombinations[i][j+2]].innerText
             && boxes[winningCombinations[i][j]].innerText!=='' && boxes[winningCombinations[i][j+1]].innerText !== ''
             && boxes[winningCombinations[i][j+2]].innerText !== ''){
                if(turnX){
                    winner = true;
                    result.style.display="block";
                    result.innerText="O is winner !!!";
                }
                else if (turnX==false){
                    winner = true;
                    result.style.display="block";
                    result.innerText="X is winner !!!";
                }
            break;
        }
    }
}
}

// click function:
let click = ()=>{};
boxes.forEach((val)=>{
    click = ()=>{
        if(turnX==true && val.classList[1]!="X" && val.classList[1]!='O' && winner == false){
            val.innerText = "X";
            val.classList.add('X');
            turnX=false;
            checkwinner(turnX);
        }
        else if (turnX==false && val.classList[1]!="X" && val.classList[1]!='O' && winner == false){
            val.innerText = "O";
            val.classList.add('O');
            turnX=true;
            checkwinner(turnX);
        }
        val.removeEventListener('click',click);
    }
    val.addEventListener('click',click);
})


// reset button:
resetBtn.addEventListener("click",()=>{
    boxes.forEach((val)=>{
        val.innerText='';
        val.classList.remove('X');
        val.classList.remove('O');
        val.addEventListener('click',click);
    })
    turnX = true;
    winner = false;
    result.style.display="none";
})