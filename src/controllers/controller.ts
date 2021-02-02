"use strict"
console.log("controller ts works");
// instanciamos
var rocket:   Rocket;
var thruster: Thruster;
var arrAll:   Rocket[] = new Array;

// array for power numbers
var arrThree: number[] = [];
var arrSix:   number[] = [];

//add visible fakes
// get to action fakes
(document.getElementById('boton1') as HTMLInputElement).addEventListener('click', createOne);
(document.getElementById('boton7') as HTMLInputElement).addEventListener('click', createTwo);
var button3 = (document.getElementById('boton3') as HTMLInputElement);
var button4 = (document.getElementById('boton4') as HTMLInputElement);
var button5 = (document.getElementById('boton5') as HTMLInputElement);
var button6 = (document.getElementById('boton6') as HTMLInputElement);

// helpers
var counter: number = 0;
var i:       number  = 0;
var found:   boolean = false;
var text:    string  = "";
var text1:   string  = "";
arrSix   =   [30, 40, 50, 50, 30, 10];
arrThree =   [10, 30, 80];
var maxSpeed: number = 0;

// containers to display results
var arrSpeed: number[] = new Array;
var arrCopy:  Rocket[] = new Array;

// print me 
var writeMe  = (<HTMLSelectElement>document.querySelector('#textMe'));
var writeMe2 = (document.querySelector('#textMe2')as HTMLSelectElement);
var writeMe3  = (<HTMLSelectElement>document.querySelector('#textMe3'));
var writeMe4 = (document.querySelector('#textMe4')as HTMLSelectElement);

// fake rockets pressed by user
function createOne(){
    clearFields();
    clearFields2();
let name: string = ("32HJKLFR");
let num:  number = 3;
 numThrusters(name, num);
  displayFields('divShow2');
  displayFields('divShow4');
}
function createTwo(){
    clearFields3();
    clearFields4();
let name: string = ("LDSFJA32");
let num:  number = 6;
numThrusters(name, num);
displayFields('divShow3');
}
console.log(arrAll);

// "One ring to rule them all" (J.R.R. Tolkien)
// now function takes parameter from onclick in html
function fastOne(str: string, num: number){
    // add class visible
    arrDivShow(str);
    // take an index of the arr of objects from the class visible
    i = indexBotton();
    // check which buttons were click
    (num % 2 == 0) ?  brakes(arrAll[i]) : faster(arrAll[i]);
    // class method to show the thrusters
    arrSpeed = arrAll[i].showThrusters();
    console.log(arrSpeed);
    // what speed is left thrusters
    let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    // print max power total
    arrSpeed = arrAll[i].showMaxPower();
    // what speed is IN the race from thrusters
    let sumNum2: number = addNum(arrSpeed);
    // print two powers
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    // conditionals toprint
    (str == 'divShow2') ? writeOne(text) : writeThree(text);
    
    (sumNum == 0) ? text1 = `No more power available. MaxPower of ${sumNum2} reached` : 
                    text1 = (` ${arrAll[i].myName}: ${arrAll[i].showThrusters()}`);
    
    (str == 'divShow2') ? writeTwo(text1) : writeFour(text1);
    arrDivHide(str);
}
// no longer needed as parameters helped
// function slowOne same as above but chenges to brakes(arrAll[i])
console.log(arrAll);
/******************************AUX FUNCTIONS**************************************/

// number of thrusters revisited
function numThrusters(str: string, num: number){
    // six shouldn't clean
     if( num === 3){
        clearFields();
        clearFields2();
     }else {
        clearFields3();
        clearFields4();
     }
    

    let findMe: Rocket | undefined = checkNameRockets(str);
    if(findMe != undefined) {
        rocketIn(str);
    } else {
        // create the object
        newRocket(str);
        (num === 3) ? newThrusters(arrThree) : 
        (num === 6) ? newThrusters(arrSix) : finalMistake();
        console.log(arrAll);
        writeText(rocket);
        writeText1(rocket);
        
    }
    console.log(text);
    console.log(text1);
    (num === 3) ? writeOne(text) : writeThree(text);
    text = lastword(text);
    (text == 'database') ? text1 = "" : text1;
    (num === 3) ? writeTwo(text1) : writeFour(text1);
    

} // end number thrusters

function faster(obj: Rocket){
    obj.accelerate();
    console.log(obj);
    return obj;
}
function brakes(obj: Rocket){
    obj.brake();
    console.log(obj);
    return obj;
}
// find the index of the button who accianates either power or brake
function indexBotton(){
    let findDiv:HTMLCollection = (document.getElementsByClassName("showDiv"));
    let pickMe: HTMLCollection = document.getElementsByClassName("visible");
    counter = 0;
    for (let i: number = 0; i < findDiv.length; i++){
        if(findDiv[i].isEqualNode(pickMe[0]) ){
            console.log("finally worked");
            counter = i;
        } else {
            console.log("Keep searching");
        
        }
        
    }
    
   return counter;
}
//check if it is in the arr 
function checkNameRockets(str: string){
let findMe: undefined | Rocket = arrAll.find((element: Rocket) => element.myName == str);
console.log(findMe)
return findMe;
}
// not in use yet
function positionArr(): void{
let num: string = "0";
for(num in arrAll){
    num;
}
}
// creation of objects
const newRocket    = (str: string) => arrAll.push(rocket = new Rocket(str));
const newThrusters = (arr: number[]) => arr.map((e: number) => rocket.addArrThrusters(thruster = new Thruster(e, maxSpeed)));

// add operations arr
const addNum = (arr: number[]) => arr.reduce((a: number, b: number) => a + b);


// DOCUMENTATION
// get elements type
// https://stackoverflow.com/questions/49062640/unable-to-cast-htmlselectelement-in-typescript/49063277
// last word
// https://stackoverflow.com/questions/20883404/javascript-returning-the-last-word-in-a-string
// odd even
// https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even
// two actions same botton
// https://stackoverflow.com/questions/16025138/call-two-functions-from-same-onclick