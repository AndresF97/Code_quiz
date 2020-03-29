# Code_quiz
- This is a Beginner programmer test your score will be saved unitl you decide to delete it from yoyr machine.
## Site Picture
![Code quiz](assets/img/CodeQuiz.gif)

## Summary 
This a website is supposed to run a test with a timer.

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Bootstrap - Used to create cosmitics of the      website and Media inquries
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
-Javascript - to make the quiz function


## Code Snippet
```html
<html>
<body>
    <script>
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
    
    
    </script>
</body>
</html>
```
-This code is important since it lets me hide alot of elements in the page accourding to the actions of the user.
 
## Author Links
- [LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
- [GitHub](https://github.com/AndresF97)