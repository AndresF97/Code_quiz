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
var totalMinutes = 60;  
function minutesFormat(){
    // var secondsLeft= totalSeconds - secondsElapsed;
    // var minutesleft= Math.floor(secondsLeft/60);
    // var formattedMinutes;
    // if(minutesleft < 10){
    //     formattedMinutes= "0" + minutesLeft
    // }else{
    //     formattedMinutes = minutesLeft;
    // }
    // return formattedMinutes;
    var timeInterval = setInterval(function(){
        totalMinutes--
        minutes.textContent = totalMinutes

        if(totalMinutes === 0){
            clearInterval(timeInterval)
        }
    },6000
    )
}
// function secondFormat(){
//     var secondsLeft=(totalSeconds - secondsElapsed)%60;
//     var formattedSeconds;
    
//     if (secondsLeft < 10){
//         formattedSeconds = "0" + secondsLeft;
//     }else{
//         formattedSeconds = secondsLeft
//     }
//     return formattedSeconds
// }
// function renderTime(){
//     minutes.textContent = minutesFormat();
//     secs.textContent = secondFormat();
//     stopTimer();
// }

function startTime(){
    var timeInterval = setInterval(function(){
        totalMinutes--
        minutes.textContent = totalMinutes

        if(totalMinutes === 0){
            clearInterval(timeInterval)
        }
    },6000
    )
}

// function stopTime(){
//     secondsElapsed=0;
//     setTime()
//     renderTime()
// }
