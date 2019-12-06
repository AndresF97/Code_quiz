//Pointers to find elements better
var questions = document.querySelector("#carries_q")
var answer = document.querySelector("#carries_a")

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
  questions.innerHTML = "";
  for(i=0; i < quiz.length;i++){
    var quest = quiz[i].q;
    var h = document.createElement("h4");
    h.textContent = quest;
    questions.appendChild(h)
  }
  answer.innerHTML = "";
  for(i=0; i < quiz.length;i++){
    var ans =quiz[i].a;
    var bt=document.createElement("button");
    bt.textContent=ans;
    answer.appendChild(bt)

  }
}
