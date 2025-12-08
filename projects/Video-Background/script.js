const btn = document.querySelector("button");
const video = document.querySelector(".background-video");
const fa =document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

window.addEventListener("load",()=>{
    preloader.style.zIndex="-2";
})

btn.addEventListener("click",()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    }else{
        btn.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play");
    }
})
