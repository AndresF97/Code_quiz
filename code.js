//Pointers to find and use code easily
var main = document.getElementById("Main-menu");
var start = document.querySelector("#bt");
var q_sec= document.querySelector("#question-sec")
var score=document.querySelector("#score")

//uses the an event listener on the start button to to bring text present
start.addEventListener("click",function(){
    main.setAttribute("style","display:none")
    q_sec.setAttribute("style","display:contents")
    creation()    
})
score.addEventListener("click",function(event){
    event.preventDefault()
    main.setAttribute("style","display:none")
    q_sec.setAttribute("style","display:none")
    sp.setAttribute("style","display:contents")
     //start timer

    //render the question.js
    creation()
})
