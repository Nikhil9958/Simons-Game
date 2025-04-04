let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;


// let btns = ["red","blue","orange","violet"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})

function levelUp(){
    level++;
    let heading = document.querySelector('.level');
    heading.innerText = `Level ${level}`;
    // let boxId = Math.floor(Math.random()*4);
    btnFlash(btns[boxId]);
}

function btnFlash(btn){~
    btn.classList.add('white');
    setTimeout(()=>{
        btn.classList.remove('white');
    },300);
}