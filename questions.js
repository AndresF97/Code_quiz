//Pointers to find elements better
var questions = document.querySelector("#carries_q")
var answer = document.querySelector("#carries_a")
var a_counter = 0
var q_counter = 0

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

    

   part1()
   part2()
   startTime()
  }
    
    ///question and answers functions 
    function part1(){
      q_counter = 0
      questions.innerHTML = "";
        var quest = quiz[q_counter].q;
        var h = document.createElement("h4");
        questions.setAttribute("date-quest",quest)
        h.textContent = quest;
        questions.append(h)
     }
  
    function part2(){
      a_counter=0
      answer.innerHTML = "";
       for(i=0; i <= quiz.length;i++){
         var ans =quiz[a_counter].a;
         var bt=document.createElement("button");
         bt.classList.add("btn");
         bt.classList.add("btn-success");
         bt.classList.add("m-2");
         answer.setAttribute("data-ans",ans[i])
         bt.textContent = ans[i]
         answer.append(bt)
         
      }
      bt.addEventListener("click",function(event){
          event.preventDefault()
          console.log("hello")
          questions.textContent=" "
          answer.textContent=" "
          q_counter++
          a_counter++
          part1()
          part2()
       
        }) 
      }