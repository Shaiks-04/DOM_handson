let p=document.getElementById("text")
function fun(){
    console.log(p.innerHTML);
}
let a=document.getElementsByTagName("h1")
function fun1(){
    console.log(a[0].innerHTML);
}
let third=document.getElementsByClassName("box")
function fun2(){
    console.log(third[0].innerHTML);
}
function c(){
    document.getElementById("c").innerHTML="HELLO WORLD";
}    
let heading=document.getElementById('heading');
function fun3(){
heading.style.color='red';
}
function f(){
    document.getElementById("e").innerHTML="Welcome to Elevation Academy";  
 }
 
// const style=document.querySelector('h1');
    // heading.style.color='red';

let head=document.querySelector('h3')
function time(){
    let t=new Date();
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();
    if(h>12){
        h=h-12;
    }
    let t1=h+" : "+m+" : "+s; 
    head.innerText=t1;
}
setInterval(()=>{
    time();
},1000)
let parent=document.querySelector('.parent1');
let b=document.querySelector('.but');
let count=0;

b.addEventListener('click', ()=>{
    if(count%2===0){
    parent.setAttribute('style', 'flex-direction: column');
    count++;
    }
    else{
    parent.setAttribute('style', 'flex-direction: row');
    count++;
    }
})