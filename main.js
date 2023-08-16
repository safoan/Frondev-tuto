let btn=document.querySelector(".btn");
let intro=document.querySelector(".intro");
let suc=document.querySelector(".success");
let err=document.querySelector(".err");
let btnsuc=document.querySelector(".btnsuc");
let inpholder=document.querySelector(".inp")
let input=document.querySelector("input");

btn.addEventListener ("click",function(event){
    let exp=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
    let inp=document.querySelector("input").value;
    if(exp.test(inp)){
        event.preventDefault();
        suc.style.display="flex";
        intro.style.display="none";
        err.style.display="none";
        input.classList.remove("error");

    }else {
        event.preventDefault();
        err.style.display="block";
        input.classList.add("error");
    }
});

btnsuc.addEventListener("click",function(){
    suc.style.display="none";
    intro.style.display="flex";
});