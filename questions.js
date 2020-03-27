//Pointers to find elements better
var questions = document.querySelector("#carries_q")
var answer = document.querySelector("#carries_a")
// get the correct message or wrong message response
var correctMessage = document.querySelector("#correctAnswer")
var wrongMessage = document.querySelector("#wrongAnswer")
var scoreOnScreen = document.querySelector("#points")
var a_counter = 0;
var q_counter = 0;
var score = 0 

//hideing certain elements on the page 
correctMessage.setAttribute("style","display:none")
wrongMessage.setAttribute("style","display:none")

//Object that carries the questions
var quiz=[
 { q:"We use a ____ tag to connect different code into our HTML",
    a:["Link tag","Href tag","Img tag","Div tag"]},
    {q:"___ helps create websites faster",
     a:["Bootsmack","HelpCSS","BootStack","Bootstrap","Bootmat"]},
    {q:"what terminal command do we use to get code from a repository",
      a:["git giveme","git iwantit","git pretty please","git pull"]},
]
//function that will get the the elemnet and create and add new content to tye DOM

function creation(){
   questionare()
   startTime()
  }
    
    ///question and answers functions 
    function questionare(){
      scoreOnScreen.innerHTML = score
      console.log(a_counter)
      if(a_counter === 3){
        doneWithTest(true)
      }
      //renders questions
      questions.innerHTML = "";
        var quest = quiz[q_counter].q;
        var h = document.createElement("h4");
        questions.setAttribute("data-quest",quest)
        h.textContent = quest;
        questions.append(h)

        //renders answers
      answer.innerHTML = "";
       for(i=0; i <= quiz.length;i++){
         var ans = quiz[a_counter].a;
         var bt= document.createElement("button");
         bt.classList.add("btn");
         bt.classList.add("btn-success");
         bt.classList.add("m-2");
         bt.setAttribute("data-ans",ans[i])
         bt.textContent = ans[i]
         answer.append(bt)
         
     }
    }
  
      answer.addEventListener("click",function(event){
          correctMessage.setAttribute("style","display:none")
          wrongMessage.setAttribute("style","display:none")
          event.preventDefault()
          console.log(event.target)
          var clickedAnswer = event.target.getAttribute("data-ans")
         if(clickedAnswer === "Link tag" || clickedAnswer === "Bootstrap" || clickedAnswer === "git pull"){
          correctMessage.setAttribute("style","display:contents")
          questions.textContent=""
          answer.textContent=""
          q_counter+=1
          a_counter+=1
          score+=15
          // this would reset the content of teh question and answer
          questionare()
         }else{
           wrongMessage.setAttribute("style","display:contents")
           lessTime(true)
           questions.textContent=""
          answer.textContent=""
          q_counter+=1
          a_counter+=1
          score-=2
            // this would reset the content of teh question and answer
          questionare()
         }
}) 

var lessTime = function(answer){
  if(answer === true){
    totalMinutes-=5
  }
}
var doneWithTest = function(answer){
  if(answer === true){
    totalMinutes = 0
  }
}