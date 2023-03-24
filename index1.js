let randomnumber=Math.floor(Math.random()*100);
let no= document.querySelector('.type');
let msg=document.querySelector('.guess');
let hscore=document.querySelector('.chan2');
let score=document.querySelector('.chan');
let num=document.querySelector('.qstn');
function Play(){
    document.querySelector('.type').value="";
    document.querySelector('.chan').innerText=100;
    document.querySelector('.guess').innerText="Start guessing..."
    randomnumber=Math.floor(Math.random()*100);
    document.querySelector('.qstn').innerText="?";
}
function check(){
    score.innerText-=1;
    if(randomnumber>parseInt(no.value)){
        msg.innerText="Your Guess Is Low";
    }
    else if(randomnumber<parseInt(no.value)){
        msg.innerText="Your Guess Is High";
    }
    else if(randomnumber===parseInt(no.value)){
        msg.style.fontSize="30px";
        msg.innerText="🤩🤩 Hurray You Won 🤩🤩";
        document.body.style.backgroundColor = "rgb(71, 186, 140)";
        hscore.innerText=score.innerText;
        num.innerText=no.value;
    }
}
