// self executing function here

var AM = [];
	AM[ 1 ]           = { question:"A és B pont távolsága a koordináta-rendszerben?",                answer:" gyök((A1-B1)^2 + (A2-B2)^2)"               };
	AM[ 2 ]           = { question:"Egy egyenes normálvektorából úgy kapom az irányvektorát, hogy...",      answer:"felcserélem a normálvektor koordinátáit és az egyiket megszorzom (-1)-gyel"     };
	AM[ 3 ]           = { question:"n(A,B) normálvektorú, (x_0,y_0) ponton átmenő e egyenes egyenlete:",         answer:"Ax + By = Ax_0 + By_0"        };        
	AM[ 4 ]           = { question:"i(v_1,v_2) irányvektorú, (x_0,y_0) ponton átmenő e egyenes egyenlete:",         answer:"v_2*x - v_1*y = v_2*x_0 - v_1*y_0"        };        
	AM[ 5 ]           = { question:"Mondd ki a Cosinus-tételt!",       answer:"c^2 = a^2 + b^2 -2ab cos(gamma)"       };        
    AM[ 6 ]           = { question:"sin(alfa) = ?"             ,       answer:"a szöggel szemközti befogó osztva az átfogóval"    };
    AM[ 7 ]           = { question:"cos(alfa) = ?"             ,       answer:"a szög melleti befogó osztva az átfogóval"    };
    AM[ 8 ]           = { question: "Mely egyenesek metszéspontja adja a háromszög körülírt körének középpontját?",  answer: "oldalfelező merőlegesek" };
    AM[ 9 ]           = { question: "Mely egyenesek metszéspontja adja a háromszög beírt körének középpontját?", answer: "szögfelezők" };
    AM[ 10]           = { question: "A háromszög súlypontja hogyan osztja a súlyvonalakat?" , answer: "Harmadolja őket. Mindig a csúcsok felé esik a 2/3, az oldalak felé az 1/3 rész" };
    AM[ 11]           = { question: "Add meg a háromszög területét a Héron-képlettel!",       answer: "T = négyzetgyök(s*(s-a)*(s-b)*(s-c)) "  };
    AM[ 12]           = { question: "Add meg a trapéz területét a magasság és a két alap segítségével!",       answer: "T = (a+c) * m / 2) "  };
    AM[ 13]           = { question: "Add meg a paralelogramma területképletét!"      ,       answer: "(m * a) / 2"  };
    AM[ 14]           = { question: "Add meg a deltoid területképletét!"      ,       answer: "(e * f) / 2, ahol e és f az átlók"  };
    AM[ 15]           = { question: "Egy n csúccsal rendelkező sokszög szögeinek összege mennyi?"      ,       answer: "(n-2) * 180"  };
    AM[ 16]           = { question: "Egy n csúccsal rendelkező szabályos sokszög szögeinek nagysága mennyi?"      ,       answer: "((n-2) * 180) / n"  };
    AM[ 17]           = { question: "Kör területe:"      ,       answer: "T = r^2 * pi"  };
    AM[ 18]           = { question: "Kör kerülete:"      ,       answer: "T = 2r*pi" };
    AM[ 19]           = { question: "Párhuzamos szelők tétele és Párhuzamos szelő szakaszok tétele:", answer: "Egy szög csúcsa O, a szelők A, A', B és B' pontokat adják. OA/OA' = OB/OB' = AB/A'B' "  };
    AM[ 20]           = { question: "Mondd ki a Thalesz-tételt:",       answer: "Átmérőből másik két húrral rajzol háromszög derékszögű!"  };
    AM[ 21]           = { question: "Külső pontból körhöz húzott érintők tulajdonságai:"      ,       answer: "1. A külső pont és az érintési pontok által meghatározott két szakasz egyenlő. 2. Az érintési pontba húzott sugarak merőlegesek az érintőkre."  };
    AM[ 22]           = { question: "sin(0) = ",         answer: "0" };
    AM[ 23]           = { question: "sin(30) = ",        answer: "1/2" };
    AM[ 24]           = { question: "sin(45) = ",        answer: "gyök(2) / 2" };
    AM[ 25]           = { question: "sin(60) = ",        answer: "gyök(3) / 2" };
    AM[ 26]           = { question: "sin(90) = ",        answer: "1" };
    AM[ 27]           = { question: "sin(135) = ",       answer: "gyök(2) / 2" };
    AM[ 28]           = { question: "sin(270) = ",       answer: "-1" };
    AM[ 29]           = { question: "sin(315) = ",       answer: "- gyök(2) / 2" };        
    AM[ 30]           = { question: "sin(pi/6) = ",       answer: "1/2" };
    AM[ 31]           = { question: "sin(pi/4) = ",       answer: "gyök(2) / 2" };
    AM[ 32]           = { question: "sin(pi/3) = ",       answer: "gyök(3) / 2" };
    AM[ 33]           = { question: "sin(pi/2) = ",       answer: "1" };
    AM[ 34]           = { question: "sin(pi*(5/4)) = ",   answer: "gyök(2) / 2" };
    AM[ 35]           = { question: "sin(pi*3/2) = ",     answer: "-1" };
    AM[ 36]           = { question: "sin(pi) = ",         answer: "0" };    
    AM[ 37]           = { question: "cos(0) = ",     answer: "1" };
    AM[ 38]           = { question: "cos(30) = ",    answer: "gyök(3) / 2" };
    AM[ 39]           = { question: "cos(45) = ",    answer: "gyök(2) / 2" };
    AM[ 40]           = { question: "cos(60) = ",    answer: "1/2" };
    AM[ 41]           = { question: "cos(90) = ",    answer: "0" };
    AM[ 42]           = { question: "cos(135) = ",   answer: "- gyök(2) / 2" };
    AM[ 43]           = { question: "cos(270) = ",   answer: "0" };
    AM[ 44]           = { question: "cos(315) = ",   answer: "gyök(2) / 2" };
    AM[ 45]           = { question: "cos(330) = ",   answer: "gyök(3) / 2" };
    AM[ 46]           = { question: "tg(0) = ",      answer: "0" };
    AM[ 47]           = { question: "tg(30) = ",     answer: "gyök(3) / 3" };
    AM[ 48]           = { question: "tg(45) = ",     answer: "1" };
    AM[ 49]           = { question: "tg(60) = ",     answer: "gyök(3)" };
    AM[ 50]           = { question: "tg(90) = ",     answer: "nem értelmezzük" };
    AM[ 51]           = { question: "tg(135) = ",    answer: "-1" };
    AM[ 52]           = { question: "tg(270) = ",    answer: "nem értelmezzük" };
    AM[ 53]           = { question: "tg(315) = ",    answer: "-1" };
    AM[ 54]           = { question: "(a+b)^2 ="  ,    answer: "a^2 +2ab +b^2"  };
    AM[ 55]           = { question: "(a+b)^2 ="  ,    answer: "a^2 -2ab +b^2"  };
    AM[ 56]           = { question: "a^2-b^2 = "  ,    answer: "(a-b)*(a+b)" };
    AM[ 57]           = { question: "(a-b)^3 = "  ,   answer: "a^3 -3ba^2 +3ab^2 -b^3" };
    AM[ 58]           = { question: "(a+b)^3 = "  ,   answer: "a^3 +3ba^2 +3ab^2 +b^3" };
    AM[ 59]           = { question: "a^3 - b^3 = "  ,  answer: "(a-b)*(a^2 +ab +b^2)"  };
    AM[ 60]           = { question: "a^3 + b^3 = "  ,  answer: "(a+b)*(a^2 -ab +b^2)"  };
    AM[ 61]           = { question: "a^( a alapú logaritmus b )"      ,       answer: "b"  };
    AM[ 62]           = { question: " Írd át x alapú logaritmusra a log_a_(b)-t, azaz a alapú logaritmus b-t" , answer: "log_x_(b) / log_x_(a)"  };
    AM[ 63]           = { question: " log_a_(b) + log_a_(c)= ",       answer: "log_a_(b*c)"  };
    AM[ 64]           = { question: " log_a_(b) - log_a_(c)= ",       answer: "log_a_(b/c)"  };
    AM[ 65]           = { question: " log_a_(b^2) = "    ,       answer: "2 * log_a_(b)"  };
    AM[ 66]           = { question: "sin(x)' ="      ,       answer: "cos(x)"  };
    AM[ 67]           = { question: "cos(x)' = "      ,       answer: "- sin(x)" };
    AM[ 68]           = { question: "integrál (sin(x)) ="      ,       answer: "-cos(x) + C"  };
    AM[ 69]           = { question: "integrál (cos(x)) ="      ,       answer: "sin(x) + C"  };
    AM[ 70]           = { question: "(x^n)' = "      ,       answer: "n * x^(n-1) "  };
    AM[ 71]           = { question: "integrál (x^n) = "      ,       answer: " x^(n+1) / (n+1) + C"  };
    AM[ 72]           = { question: "(ln(x))' = "      ,       answer: "1 / x" };
    AM[ 73]           = { question: "integrál(e^x)"      ,       answer: "e^x + C" };
    AM[ 74]           = { question: "integrál(1/x) = "      ,       answer: "ln|x| + C" };/*
    AM[ 75 ]           = { question:       ,       answer:  };
    AM[ 76 ]           = { question:       ,       answer:  };
    AM[ 77 ]           = { question:       ,       answer:  };
    AM[ 78 ]           = { question:       ,       answer:  };
    AM[ 79 ]           = { question:       ,       answer:  };
    AM[ 80 ]           = { question:       ,       answer:  };
    AM[ 81 ]           = { question:       ,       answer:  };
    AM[ 82 ]           = { question:       ,       answer:  };
    AM[ 83 ]           = { question:       ,       answer:  };
    AM[ 84]           = { question:       ,       answer:  };
    AM[ 85]           = { question:       ,       answer:  };
    AM[ 86]           = { question:       ,       answer:  };
    AM[ 87]           = { question:       ,       answer:  };
    AM[ 88]           = { question:       ,       answer:  };*/

var answer;

function SolveTheProblem() {
   // document.getElementById("solution").innerHTML = 'Itt lesz majd a megoldás '; //.innerHTML = CreateDropDown(AM);
    /*document.getElementById("solution").font-color = black;*/
    document.getElementById("solution").innerHTML = answer;
    
}    
function NewProblem() {
    var s = (Math.floor((Math.random()*2)%2)) ? "╱" : "╲";
    var numberOfQuestions = AM.length;
    var questionID = Math.floor((Math.random()*numberOfQuestions)%numberOfQuestions);
    
    document.getElementById("Solve").innerHTML = AM[questionID].question;
    document.getElementById("solution").innerHTML = "";
    
    
     answer = AM[questionID].answer;
        
    
}    

