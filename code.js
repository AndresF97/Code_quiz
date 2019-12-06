//Pointers to find and use code easily
var main = document.getElementById("Main-menu");
var start = document.querySelector("#bt");
var q_sec= document.querySelector("#question-sec")

//uses the an event listener on the start button to to bring text present
start.addEventListener("click",function(){
    main.setAttribute("style","display:none")
    q_sec.setAttribute("style","display:contents")
    creation()
    
})
