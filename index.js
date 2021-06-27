let bar= document.querySelector(".taskbar");
let menu=document.querySelector("#menu");
bar.addEventListener("click",function(){
    if(menu.style.bottom==="-700px"){
        menu.style.bottom="50px";
    }
    else{
        menu.style.bottom="-700px";
    }
});  