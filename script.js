console.log("code is start working!!!");
let flag = false;

let turnAudio = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

//function the change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//function to check the win
//this function check that the is there any winner or not
let count = 0;
const checkWin = ()=>{
    count++;
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[1]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText !== "" ){
            document.querySelector(".info h3").innerText = boxtexts[e[0]].innerText + " Won";
            let p =document.getElementById("tttt").innerText="";
            document.getElementsByTagName("img")[1].style.height="0px";
            document.getElementsByTagName("img")[0].style.height="100px";
            flag = true;
            gameover.play();
        }
    })

}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        music.volume=0.10;
        music.play();
        document.querySelector(".info h3").innerText="";
        if(boxtext.innerText ===""){
            boxtext.innerText= turn;
            turn = changeTurn();
            turnAudio.volume=0.7;
            turnAudio.play();
            checkWin();
            if (flag==false){
            document.getElementById("tttt").innerText = "Turn for "+ turn ;
            }
            if (flag==false && count==9){
                document.getElementById("tttt").innerText = "Match Drawn";
                }
        }
    })

})

reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText="";
        turn="X";
        flag=false;
        document.getElementById("tttt").innerText = "Turn for "+ turn ;
        document.getElementsByTagName("img")[0].style.height="0px";
        document.getElementsByTagName("img")[1].style.height="100px";
        document.querySelector(".info h3").innerText ="";
    }) 
})
