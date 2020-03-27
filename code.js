//Pointers to find and use code easily
// thi s display the main menu
var main = document.getElementById("Main-menu");
// listens for the button to be clicked
var start = document.querySelector("#bt");
// this gets the question section
var q_sec= document.querySelector("#question-sec")
// we target the the score section
var score=document.querySelector("#score")
// we target the minute section
var minutes=document.querySelector("#minutes")
// we target the done section
var doneScreen = document.querySelector("#done")
doneScreen.setAttribute("style","display:none")
//score section
var highscore = document.querySelector("#highscore")
highscore.setAttribute("style","display:none")

//uses the an event listener on the start button to to bring text present
start.addEventListener("click",function(){
    main.setAttribute("style","display:none");
    q_sec.setAttribute("style","display:contents");
    creation()    
})
score.addEventListener("click",function(event){
    event.preventDefault()
    main.setAttribute("style","display:none");
    q_sec.setAttribute("style","display:none");
    highscore.setAttribute("style","display:contents");
    doneScreen.setAttribute("style","display:none")
     //start timer

    //render the question.js
    creation()
})
back.addEventListener("click",function(event){
    event.preventDefault();
    main.setAttribute("style","display:contents");
    q_sec.setAttribute("style","display:none");
    doneScreen.setAttribute("style","display:none")
    sp.setAttribute("style","display:none");

})

var totalMinutes = 60;  

function startTime(){
    var timeInterval = setInterval(function(){
        totalMinutes--
        minutes.textContent = totalMinutes

        if(totalMinutes <= 0){
            clearInterval(timeInterval)
            q_sec.setAttribute("style","display:none");
            doneScreen.setAttribute("style","display:contents")
            minutes.textContent = 0
        }
    },1000
    )
}
