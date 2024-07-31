let div=document.querySelectorAll(".box");
let resetbttn= document.querySelector('.reset');
let turnO=true; //playerx,playerO
let msg = document.querySelector(".msg");
let button=document.querySelector('#game');
let winnermsg=document.querySelector('#winnermsg');

const winnerptn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = () => {
turnO= true;
enableboxes();
msg.classList.add('hide');
}

div.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log('box was clicked')
    if(turnO){
       
        box.innerText="O";
        turnO=false;
    }
    else{box.innerText="X";
        turnO=true;
    }
box.disabled=true;
  checkwinner();
    })
  
});
const disableboxes =() =>{
for(let box of div){
    box.disabled=true;
}

}
const enableboxes =() =>{
    for(let box of div){
        box.disabled=false;
        box.innerText="";
    }
    
    }
const showwinner = (winner) =>{
    msg.innerText= `CONGRACULATIONS Player${winner} you have won the game`;
    msg.classList.remove("hide");
    disableboxes();

    } 
const checkwinner = () => {
for (let val of winnerptn)  {
    
    let pot1=div[val[0]].innerText;
    let pot2=div[val[1]].innerText;
    let pot3=div[val[2]].innerText;
    if(pot1 != "" && pot2 != "" && pot3 != ""){
        if(pot1 === pot2 && pot2 === pot3){
            console.log("winner",pot1)
            showwinner(pot1);
        }
    }

}
}
button.addEventListener('click',resetgame);
resetbttn.addEventListener('click',resetgame);

