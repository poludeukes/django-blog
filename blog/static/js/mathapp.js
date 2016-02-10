// self executing function here

var AM = [];
	AM[ 0]           = { question:"Cover Page",                answer:"Cover Page"               };
	AM[ 1]           = { question:"My MSE Opportunities",      answer:"My MSE Opportunities"     };
	AM[ 2]           = { question:"Your MSE Snapshot",         answer:"Your MSE Snapshot"        };        
	AM[ 3]           = { question:"Mental Availability",       answer:"Mental Availability"       };        
	AM[ 4]           = { question:"Mondd ki a Cosinus-tételt!",       answer:"c^2 = a^2 + b^2 -2ab cos(gamma)"       };        

var answer;

function SolveTheProblem() {
   // document.getElementById("solution").innerHTML = 'Itt lesz majd a megoldás '; //.innerHTML = CreateDropDown(AM);
    /*document.getElementById("solution").font-color = black;*/
    document.getElementById("solution").innerHTML = answer;
    
}    
function NewProblem() {
    var s = (Math.floor((Math.random()*2)%2)) ? "╱" : "╲";
    var numberOfQuestions = 5;
    var questionID = Math.floor((Math.random()*numberOfQuestions)%numberOfQuestions);
    
    document.getElementById("Solve").innerHTML = AM[questionID].question + "<p> Nyomd meg a megoldásért!</p>";
    document.getElementById("solution").innerHTML = "";
    
    
     answer = AM[questionID].answer;
        
    
}    

