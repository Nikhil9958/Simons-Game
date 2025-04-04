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
let boxes = [box1,box2,box3,box4];

let heading = document.querySelector('.level');



document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})

function levelUp(){  // for machine output
    userSeq = [];
    level++;
    heading.innerText = `Level ${level}`;
    let boxId = Math.floor(Math.random()*4);
    gameSeq.push(boxes[boxId].id);
    console.log("level:",level," gameSeq:",gameSeq);
    btnFlash(boxes[boxId]);
}

function btnFlash(btn){
    btn.classList.add('white');
    setTimeout(()=>{
        btn.classList.remove('white');
    },250);
}

for(box of boxes){
    box.addEventListener('click',function(){
        if(started == true){
            boxPress(this);
            
        }
    })
}

function boxPress(box){   //for user input
    btnFlash(box);
    userSeq.push(box.id);
    console.log("userSeq:",userSeq);
    checkColor(userSeq.length);
    
}

function checkColor(userSeqLength){
    for(let idx = 0;idx<userSeqLength;idx++){
        // console.log("lvel:",level," ",userSeqLength)
        // console.log("gameSeqColor:",gameSeq," ",userSeq);
        console.log(idx)
        if(gameSeq[idx]===userSeq[idx]){
            if(idx==level-1){
                console.log("levelUp Called")
                setTimeout(()=>{
                    levelUp();
                },1000)
                // break;
            }
        }
        else{
            heading.innerText = `Game Over, Max Score: ${level}`;
            // break;
        }
    }
}