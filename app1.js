let container = document.querySelector('.container');
let upper = document.querySelector('.upper');
let lower = document.querySelector('.lower');

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let level = document.querySelector('.level');

let rand =0;

let count =0;

document.addEventListener("keypress",function(){
    console.log(level);
    level.innerText = "Level 1";
    rand = Math.floor((Math.random()*4)+1);

})


container.addEventListener('click',function(event){
    event.stopPropagation();
})

upper.addEventListener('click',function(e){
    e.stopPropagation();
})

lower.addEventListener('click',function(e){
    e.stopPropagation();
})

box1.addEventListener('click',function(){
    userSeq.push("1");
    this.classList.toggle('white');
    // console.log("white clicked");
    setTimeout(()=>{
        this.classList.remove('white');
        // console.log("red clicked");
    },500);
})

box2.addEventListener('click',function(){
    userSeq.push("2");
    this.classList.toggle('white');
    // console.log("white clicked");
    setTimeout(()=>{
        this.classList.remove('white');
        // console.log("red clicked");
    },500);
})

box3.addEventListener('click',function(){
    userSeq.push("3");
    this.classList.toggle('white');
    // console.log("white clicked");
    setTimeout(()=>{
        this.classList.remove('white');
        // console.log("red clicked");
    },500);
})

box4.addEventListener('click',function(){
    userSeq.push("4");
    this.classList.toggle('white');
    // console.log("white clicked");
    setTimeout(()=>{
        this.classList.remove('white');
        // console.log("red clicked");
    },500);
})



let userSeq = [];
let gameSeq = [];



if(rand=="1"){
    console.log("1");
    gameSeq.push(rand);
    box1.classList.toggle('white');
    setTimeout(()=>{
        box1.classList.remove('white');
    },500);
    console.log(gameSeq);
}
else if(rand=="2"){
    console.log("2");
    gameSeq.push(rand);
    box2.classList.toggle('white');
    setTimeout(()=>{
        box2.classList.remove('white');
    },500);
    console.log(gameSeq);
}
else if(rand=="3"){
    console.log("3");
    gameSeq.push(rand);
    box3.classList.toggle('white');
    setTimeout(()=>{
        box3.classList.remove('white');
    },500);
    console.log(gameSeq);
}
else{
    console.log("4");
    gameSeq.push(rand);
    box4.classList.toggle('white');
    setTimeout(()=>{
        box4.classList.remove('white');
    },500);
    console.log(gameSeq);
}

document.addEventListener("click",function(){
    console.log("clicked");
})

function check(userSeq,gameSeq){
    for(let i=0;i<gameSeq.size();i++)
}