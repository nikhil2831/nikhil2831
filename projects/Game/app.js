let gameSeql=[];
let userSeql=[];

let btns = ["yellow", "red", "purple","green"];

let started =false;
let level =0;


document.addEventListener("keypress", function () {
  if ( started == false){
   console.log("game started");
started=true;
   levelup();
  } 
});


function  btnFlash(btn){
btn.classList.add("flash");
setTimeout(function (){
   btn.classList.rmove("flash");
},1000);
}

function levelup(){
   level++;
   h2.innerText=`Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   btnFlash();
}

let h2= document.querySelector("h2");