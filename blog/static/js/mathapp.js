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
    AM[ 20]           = { question: "Mondd ki a Thalesz-tételt:",       answer: "Átmérőből másik két húrral rajzolt háromszög derékszögű!"  };
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
    AM[ 74]           = { question: "integrál(1/x) = "      ,       answer: "ln|x| + C" };
    AM[ 75 ]          = { question: "{1,6,23,98} és {1, 2, 23, 99, 109} halmazok metszete = " , answer: "{1, 23}" };
    AM[ 76 ]          = { question: "{0,6,23,98} és {1, 2, 24, 99, 109} halmazok metszete = " , answer: "üreshalmaz" };
    AM[ 77 ]          = { question: "{1,6,23,98} és {1, 2, 23, 99, 109} halmazok különbsége = " , answer: "{6, 98}"  };
    AM[ 78 ]          = { question: "{1,6,23,98} és {1, 2, 23, 99, 109} halmazok uniója = " , answer: "{1, 2, 6, 23, 98, 99, 109}" };
    AM[ 79 ]          = { question: "{0,6,23,98} és {1, 2, 24, 99, 109} halmazok uniója = " , answer: "{0, 1, 2, 6, 23, 24, 98, 99, 109}" };
    AM[ 80  ]          = { question: "2^0 " ,  answer: "1"    };
    AM[ 81  ]          = { question: "2^4 " ,  answer: "16"   };
    AM[ 82  ]          = { question: "2^5 " ,  answer: "32"   };
    AM[ 83  ]          = { question: "2^6 " ,  answer: "64"   };
    AM[ 84 ]           = { question: "2^7 " ,  answer: "128"  };
    AM[ 85 ]           = { question: "2^8 " ,  answer: "256"  };
    AM[ 86 ]           = { question: "2^9 " ,  answer: "512"  };
    AM[ 87 ]           = { question: "2^10 " , answer: "1024" };
    AM[ 88 ]           = { question: "2^11 " , answer: "2048" };
    AM[ 89 ]           = { question: "a sinus-függvény értékkészlete (ha D_f = R) =" , answer: "[-1;1]" };
    AM[ 90 ]           = { question: "cos(x) = 0 egyenlet megoldása?" , answer: "x = pi/2 + k*pi, ahol k egész szám" };
    AM[ 91 ]           = { question: "sin(x) = 0 egyenlet megoldása?" , answer: "x = k*pi, ahol k egész szám" };
    AM[ 92 ]           = { question: "Mi a racionális számok halmazának jele és definíciója?" , answer: "Azon számok halmaza, amelyek felírhatóak két egész szám hányadosaként. Jele: Q" };
    AM[ 93 ]           = { question: "Mely számokat hívjuk irracionálisaknak? Hogyan jelöljük? Nevezz meg három irracionális számot!" , answer: "Azon valós számokat, amelyek Való számok, de nem racionálisak, irracionális számoknak nevezzük. Halmazuk jele: Q*. Nevezetes példák: pi, e (Euler-szám), a 2 vagy bármely más prímszám négyzetgyöke " };
    AM[ 94 ]           = { question: "Mi a kör definíciója?" , answer: "Azon pontok halmaza a síkban, amelyek egy adott ponttól egyenlő távolságra helyezkednek el." };
    AM[ 95 ]           = { question: "Mi az ellipszis definíciója?" , answer: "Azon pontok halmaza a síkban, amelyeknek két adott ponttól vett távolságösszege állandó." };
    AM[ 96 ]           = { question: "Mi a parabola definíciója?" , answer: "Azon pontok halmaza a síkban, amelyek egy adott ponttól és egy adott egyenestől azonos távolságra helyezkednek el. " };    
    AM[ 97 ]           = { question: "Mely görbéket hívjuk kúpszeleteknek?" , answer: "Kör, ellipszis, hiperbola,parabola (elfajult esetek: pont, egyenes, metsző egyenespár" };
    AM[ 98 ]           = { question: "Mi a módusz? Mi lesz a (2,5,23,34, 112, 112, 2012) adatsor módusza?" , answer: "A módusz egy sorozat (általában egy statisztikai minta értékei) leggyakrabban előforduló eleme. 112." };
    AM[ 99 ]           = { question: "Mi a medián? Mi lesz a (2, 5, 23, 34, 112, 112, 2012, 2012) adatsor mediánja?" , answer: "A medián egy rendezett sorozat középső eleme. Páratlan sok elemű sorozat esetén ez egyértelmű, páros sok elem esetén a két középső érték az alsó és a felső medián, gyakran a számtani közepüket tekintjük mediánnak. Itt: 34, 112, az átlaguk pedig 73." };
    AM[ 100]           = { question: "Mire használjuk a statisztikában a szórást? " , answer: "A szórás megmutatja, hogy a statisztikai adatsor értékei milyen mértékben térnek el átlagosan az adatsor számtani közepétől. Például az (1,1,2,2,3,4,4,4,5,6,6,7,7) és az (4,4,4,4,4,4,4,4,4,4,4,4,4) sorozatok átlaga, mediánja és módusza megegyezik, a két adatsor 'különböző természetét' a szórás fogja megmutatni." };
    AM[ 101]           = { question: "Hogyan számoljuk a szórást?" , answer: "1. Vesszük az adatsor minden elemének és az adatsor átlagának különbségét. 2. Ezeket négyzetre emeljük és összegezzük. 3. Az összeget elosztjuk az elemszámmal, majd az így kapott szám négyzetgyökét vesszük." };
    AM[ 102]           = { question: "a,b,c élű téglatest felülete = " , answer: "2*(ab+bc+ac)" };
    AM[ 103]           = { question: "T alapkörű, m magasságú egyenes körhenger térfogata =  " , answer: "T * m" };
    AM[ 104]           = { question: "Mit nevezünk a háromszögben középvonalnak és milyen tulajdonságai vannak? " , answer: "Két oldalfelezőpontra illeszkedő egyenes. A hossza a szemközti alap fele, azzal párhuzamos, a háromszög területét negyedeli." };
    AM[ 105]           = { question: "Mondj példát megszámlálhatóan végtelen halmazra! " , answer: "N, Z, az egész számokból alkotott számpárok halmaza, a prímszámok halmaza, stb." };
    AM[ 106]           = { question: "Mondj példát nem megszámlálhatóan végtelen halmazra! " , answer: "R, Q, Q*" };
    AM[ 107]           = { question: "Mi a teljes indukció?" , answer: "Bizonyítási módszer, amelynek során bebizonyítjuk, hogy ha a bizonyítandó állítás igaz (n) szám esetén, akkor (n+1)-re is teljesül. Így elég egy konkrét értéket találni, minden ezt követő értékre is teljesül az állítás." };
    AM[ 108]           = { question: "Milyen típusú kombinatorikai feladat a következő: Hány féle képpen tudunk felakasztani 2 zöld, 4 piros és 7 barna kabátot egy hosszú rúdra?" , answer: "Ismétléses permutáció." };
    AM[ 109]           = { question: "Milyen típusú kombinatorikai feladat a lehetséges lottótalálatok megszámlálása? " , answer: "ismétlés nélküli kombináció." };
    AM[ 110]           = { question: "Hány háromjegyű szám képezhető az 1,2,3,8,9 számokból? " , answer: "5*5*5, azaz 5^3" };
    AM[ 111]           = { question: "Hány háromjegyű szám képezhető a 0,1,2,3,8 számokból? " , answer: "4*5*5 (mert a nulla nem állhat az első helyiértéken!)" };
    AM[ 112]           = { question: "Hány háromjegyű szám képezhető az 1,2,3,8,9 számokból, ha az ismétlés nem megengedett? " , answer: "5! = 5*4*3*2*1, azaz 5 faktoriálisa." };
    AM[ 113]           = { question: "A kettes számrendszer-beli 101101 szám mennyi tízes számrendszerben? " , answer: "1*1 +0*2 +1*4 +1*8 +0*16 +1*32 = 45" };
    AM[ 114]           = { question: "Írd át a 13-at kettes számrendszerbe! " , answer: "13 = 1*8 +1*4 +0*2 +1*1, tehát 13 értéke kettes számrendszerben 1101" };
    AM[ 115]           = { question: "Bizonyítsd, hogy gyök(2) irracionális!" , answer: "Indirekt bizonyítás: feltételezzük, hogy racionális, így felírjuk a/b alakban (a és b relatív prímek). Az így alkotott egyenletből kapjuk, hogy 2*b^2=a^2. Innen a páros, így viszont b is páros, ez viszont ellentmond a kezdeti feltételeknek." };
    AM[ 116]           = { question: "Mikor mondjuk, hogy két szám relatív prím? Adj példát!" , answer: "Ha legnagyobb közös osztójuk 1. Például 8 és 27." };
    AM[ 117]           = { question: "Mikor mondjuk, hogy egy természetes szám prímszám? Adj példát! " , answer: "Ha csak két osztója van: 1 és önmaga. Pl: 2, 3, 5, 23, 379721" };    
    AM[ 118]           = { question: "Mi az abszolútérték definíciója?" ,  answer: "Egy szám 0-tól vett távolsága."  };
    AM[ 119]           = { question: "Hogyan bizonyítjuk a másodfokú egyenlet megoldóképletét? (vázlatosan)" ,  answer: "1. Osztjuk a másodfokú egyenlet általános alakját a-val, majd (b/a)-t és (c/a)-t helyettesítjük p-vel és q-val. 2.Úgy rendezzük az egyenletet, hogy (x + p/2)^2 előálljon az egyenlet baloldalán, a többi tagot jobbra rendezzük. 3.gyököt vonunk, majd x-re rendezünk."  };
    AM[ 120]           = { question: "Mi a különbség a monoton és a szigorúan monoton függvények között? Adj meg példákat!" ,  answer: "A szigorúan monoton függvények nem engedik meg az egyenlőséget, a monoton függvények megengedik (szoktuk monoton nemcsökkenőnek / nemnövőnek is nevezni őket ezért). Pl.: f(x) = 3 monoton nemnövő/nemcsökkenő, f(x) = x^3 szigorúan monoton növő."  };
    
    
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

