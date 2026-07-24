'use strict';
const modal=document.querySelector(".div1");
const overlay=document.querySelector(".overlay");
const close=document.querySelector(".close");
const show1=document.querySelector(".show1");
const show2=document.querySelector(".show2");
const show3=document.querySelector(".show3");
document.querySelector(".show1").addEventListener(
    'click',function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
)
document.querySelector(".show2").addEventListener(
    'click',function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
)
document.querySelector(".show3").addEventListener(
    'click',function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
)
const closeModal=function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
document.querySelector(".close").addEventListener(
    'click',closeModal)
document.querySelector(".overlay").addEventListener('click',closeModal)
document.addEventListener('keydown',function(e){
   console.log(e.key)

if(e.key==="Escape"&&!modal.classList.contains("hidden")){
        closeModal();
}})