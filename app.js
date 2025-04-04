let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;


//stop propagation
let container = document.querySelector('.container'); 
let upper = document.querySelector('.upper');
let lower = document.querySelector('.lower');
container.addEventListener('click',function(event){
    event.stopPropagation();
})

upper.addEventListener('click',function(e){
    e.stopPropagation();
})

lower.addEventListener('click',function(e){
    e.stopPropagation();
})

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let btns = [box1,box2,box3,box4];


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
    let boxId = Math.floor(Math.random()*4);
    btnFlash(btns[boxId]);
}

function btnFlash(btn){
    btn.classList.add('white');
    setTimeout(()=>{
        btn.classList.remove('white');
    },250);
}