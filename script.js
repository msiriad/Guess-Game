let headingone=document.querySelector(".headone")
let inputone=document.querySelector(".inputone")
let buttonone=document.querySelector(".buttonone")
let comment=document.querySelector(".comment")
let playerone=document.querySelector(".playerone")

let headingtwo=document.querySelector(".headtwo")
let inputtwo=document.querySelector(".inputtwo")
let buttontwo=document.querySelector(".buttontwo")
let commenttwo=document.querySelector(".commenttwo")
let playertwo=document.querySelector(".playertwo")
let chance=document.querySelector(".chance")

let count=3



buttonone.addEventListener("click",function(){
    if(!inputone.value){
        comment.innerHTML="Please Put a value"
        comment.style.color="red";
        
    }else if(isNaN(inputone.value)){
        comment.innerHTML="Please Put a Number" 
        comment.style.color="red";

        
    }else if(!(inputone.value>0 && inputone.value<=10)){
        comment.innerHTML="Please Put a Number between 1 to 10" 
        comment.style.color="red";
        
    }else{
        
        playertwo.style.display="block"
        playerone.style.display="none"
        chance.innerHTML=`chance: ${count}`

    }
    
})

buttontwo.addEventListener("click",function(){
    if(!inputtwo.value){
        commenttwo.innerHTML="Put a value"
        
    }else if(isNaN(inputtwo.value)){
        commenttwo.innerHTML="Put a Number"
        
    }else if(!(inputtwo.value<=10 && inputtwo.value>1)){
        commenttwo.innerHTML="Put a Number between 1 to 10"

    }else{
        if(count>1){count-- 
        chance.innerHTML=`chance: ${count}`
         if (inputone.value==inputtwo.value) {
            commenttwo.innerHTML="Playner Two Winner"
            commenttwo.style.fontSize="50px"
            commenttwo.style.color="blue"
            buttontwo.style.display="none"
        }
    }else{
        count=0
        chance.innerHTML=`chance: ${count}`
        commenttwo.innerHTML="Playner One Winner"
        buttontwo.style.display="none"

        }
    }
})




