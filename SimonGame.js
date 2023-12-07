let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple","green" ]; // 0th based indexing

let started=false;
let level=0;

// h1 select for updating levels
let h2=document.querySelector("h2");

// step 1---preesss any key to start
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;

        // call level up function 
        levelup()
    }
   
    
    //console.log("game started");
});

//step 2---- flash button nd level up

// for button flash
function gameflash(btn){
    btn.classList.add("flash");
    // time to flash
    setTimeout(function(){
     btn.classList.remove("flash")
    },250);
}

// user flash
function userflash(btn){
    btn.classList.add("userflash");
    // time to flash
    setTimeout(function(){
     btn.classList.remove("userflash")
    },250);
}

function levelup(){
userSeq=[];
    level++;
h2.innerText=`Level ${level}`;



// random button choose
let ranIndx=Math.floor(Math.random()*3);
let rancolor=btns[ranIndx];
let ranbtn =document.querySelector(`.${rancolor}`);

gameSeq.push(rancolor);
console.log(gameSeq);
//console.log(ranIndx);
//console.log(rancolor);
//console.log(ranbtn);

gameflash(ranbtn); // call flash func

}

function checkans(idx){
   // console.log("curr level" , level);
  // let idx=level-1;
 
if( userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
       setTimeout(levelup,1000);

    }
    //console.log("same value");
}else{
    h2.innerText=`Game Over! your score was <b>${level}</b> <b>press any key to start .`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset(); // call after over game
     
}

}



//Step 3---Button event listener

function btnpress(){
    //console.log(this);
    let btn=this;
    userflash(btn);
    // get color also
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    //console.log(userColor);
    //console.log("button was pressed");


    checkans(userSeq.length-1);

} 

let allbtns=document.querySelectorAll(".btn");
for( btn of allbtns){
    btn.addEventListener("click", btnpress);
}


function reset(){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}




