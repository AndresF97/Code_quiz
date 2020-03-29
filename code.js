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
    startTime()
    main.setAttribute("style","display:none");
    q_sec.setAttribute("style","display:contents");
    creation()    
})
score.addEventListener("click",function(event){ 
    event.preventDefault()
    main.setAttribute("style","display:none");
    q_sec.setAttribute("style","display:none");
    highscore.setAttribute("style","display:contents");
    stopTimer()
    creation()
    ScoreTableShow()
    showDoneScreen(false)
})
backHome.addEventListener("click",function(event){
    event.preventDefault();
    main.setAttribute("style","display:contents");
    q_sec.setAttribute("style","display:none");
    doneScreen.setAttribute("style","display:none")
    highscore.setAttribute("style","display:none");

})

var totalMinutes;  

function startTime(){
    totalMinutes = 60
    var timeInterval = setInterval(function(){
        totalMinutes--
        minutes.textContent = totalMinutes

        if(totalMinutes <= 0){
            clearInterval(timeInterval)
            q_sec.setAttribute("style","display:none");
            showDoneScreen(true)
            minutes.textContent = 0
        }else if (totalMinutes === ""){
            showDoneScreen(false)
        }
    },1000
    )
    minutes.textContent = "--"
}
var showDoneScreen = function(str){
    if(str === true){
        doneScreen.setAttribute("style","display:contents")
    }else{
        doneScreen.setAttribute("style","display:none")
    }
}