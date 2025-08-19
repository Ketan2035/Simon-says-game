let gameseq=[];
let userseq=[];

let level=0;
let started=false;
let btns=["yellow","green","purple","red"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    levelup();

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
}

function levelup(){
    level++;
    h2.innerText=`level ${level}`;
    let ranidx=Math.floor(Math.random()*4);
    let rancolor=btns[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    gameflash(ranbtn);
}

function check(){
    let lastidx=userseq.length-1;
    if(userseq[lastidx]===gameseq[lastidx]){
        console.log("Correct");
        if(userseq.length===gameseq.length){
            setTimeout(function(){
                userseq=[]; // Reset user sequence for the next round
                levelup();
            }, 1000);
        }
    } else {
        console.log("Wrong");
        h2.innerHTML=`game over! your score was <b>${level}</b><br> Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 300);
        resetGame();
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    check();
} 

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
 btn.addEventListener("click",btnpress);
}

function resetGame() {
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}
