//Pointers to find and use code easily
var main = document.getElementById("Main-menu");
var start = document.querySelector("#bt");
var q_sec= document.querySelector("#question-sec")
var score=document.querySelector("#score")
var minutes=document.querySelector("#minutes")
var secs=document.querySelector("#seconds")

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
    sp.setAttribute("style","display:contents");
     //start timer

    //render the question.js
    creation()
})
back.addEventListener("click",function(event){
    event.preventDefault();
    main.setAttribute("style","display:contents");
    q_sec.setAttribute("style","display:none");
    sp.setAttribute("style","display:none");

})
var totalSeconds= 0;
var secondsElapsed=0;
var interval;
function minutesFormat(){
    var secondsLeft= totalSeconds - secondsElapsed;
    var minutesleft= Math.floor(secondsLeft/60);
    var formattedMinutes;
    if(minutesleft < 10){
        formattedMinutes= "0" + minutesLeft
    }else{
        formattedMinutes = minutesLeft;
    }
    return formattedMinutes;

}
function secondFormat(){
    var secondsLeft=(totalSeconds - secondsElapsed)%60;
    var formattedSeconds;
    
    if (secondsLeft < 10){
        formattedSeconds = "0" + secondsLeft;
    }else{
        formattedSeconds = secondsLeft
    }
    return formattedSeconds
}
function renderTime(){
    minutes.textContent =minutesFormat();
    secs.textContent = secondFormat();
    stopTimer();
}

function startTime(){
    interval = setInterval(function(){
        secondsElapsed++;
        renderTime();
    },1000);
}

function stopTime(){
    secondsElapsed=0;
    setTime()
    renderTime()
}
