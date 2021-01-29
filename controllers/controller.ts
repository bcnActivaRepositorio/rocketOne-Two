"use strict"
console.log("controller ts works");
// instanciamos
var rocket:   Rocket;
var thruster: Thruster;
var arrAll:   Rocket[] = new Array;

// array for power numbers
var arrThree: Number[] = new Array;
var arrSix:   Number[] = new Array;

//add visible fakes
// get to action fakes
(document.getElementById('boton1') as HTMLInputElement).addEventListener('click', createOne);
(document.getElementById('boton7') as HTMLInputElement).addEventListener('click', createTwo);

// helpers
var counter: number = 0;
var i: number | any = 0;
var found:  boolean = false;
var text:   string  = "";
var text1:  string  = "";
var arrSix:   Number[] = [30, 40, 50, 50, 30, 10];
var arrThree: Number[] = [10, 30, 80];
var maxSpeed: number = 0;

// containers to display results
var arrSpeed: number[] = new Array;
var arrCopy:  Rocket[] = new Array;

// print me 
var writeMe  = (<HTMLSelectElement>document.querySelector('#textMe'));
var writeMe2 = (document.querySelector('#textMe2')as HTMLSelectElement);

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
    clearFields();
    clearFields2();
let name: string = ("LDSFJA32");
let num:  number = 6;
numThrusters(name, num);
displayFields('divShow3');
}
console.log(arrAll);

// "One ring to rule them all" (J.R.R. Tolkien)
// now function takes parameter from onclick in html
function fastOne(str: string){
    // clear fields form
    clearFields();
    clearFields2();
    // add class visible
    arrDivShow(str);
    // take an index of the arr of objects from the class visible
    i = indexBotton();
    // accelerate the rocket from the index in the arr of bjects
    faster(arrAll[i]);
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
    writeOne(text);
    (sumNum == 0) ? text1 = `No more power available. MaxPower of ${sumNum2} reached` : 
                    text1 = (` ${arrAll[i].myName}: ${arrAll[i].showThrusters()}`);
    
    writeTwo(text1);
    arrDivHide(str);
}
function slowOne(str: string){
    clearFields();
    clearFields2();
    arrDivShow(str);
    i = indexBotton();
    brakes(arrAll[i]);
    arrSpeed= arrAll[i].showThrusters();
    console.log(arrSpeed);
    let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[i].showMaxPower();
    let sumNum2: number = addNum(arrSpeed);
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);
    (sumNum2 == 0) ? text1 = `Full power available. MaxPower of ${sumNum2} to be reached` : 
                     text1 = (` ${arrAll[i].myName}: ${arrAll[i].showThrusters()}`);
    writeTwo(text1);
    arrDivHide(str);
}
console.log(arrAll);
/******************************AUX FUNCTIONS**************************************/

// number of thrusters revisited
function numThrusters(str: string, num: number){

    clearFields();
    clearFields2();

    let findMe: any = checkNameRockets(str);
    if(findMe != undefined) {
        rocketIn(str);
    } else {
        // create the object
        newRocket(str);
        (num === 3) ? newThrusters(arrThree) : newThrusters(arrSix);
        console.log(arrAll);
        writeText(rocket);
        writeText1(rocket);
        
    }
    console.log(text);
    console.log(text1);
    writeOne(text);
    text = lastword(text);
    (text == 'database') ? text1 = "" : text1;
    writeTwo(text1);
    

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
// Name rocket
function myName(): string | any {
    // data
    // why the freeking prompt don't take string as data?? JEZZ!!!
    let inputName: string | any = (document.querySelector("#rocketName") as HTMLInputElement).value;
    //you watch their behaviour
    counter = 0;
    // if already entered
    inputName = polishName(inputName);
    // regex name
    let reGex: RegExp = /[0-9]{2}[A-Za-z]{6}/;
    found = (reGex.test(inputName));
    //first check
    while((inputName == "" || found == false) && counter < 3) {
        inputName = prompt(`Type the name of the rocket. You have ${2 - counter} more tries`);
        inputName = polishName(inputName);
        found = (reGex.test(inputName));
        counter++;
    }
        // go and fly by yourself
        return inputName;
}
// make sure user makes no mistakes
function polishName(str: string){
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();
        return str;  
 }
 // number thrusters
 function myNumber(){

    let thrusters: number = parseInt((document.getElementById('numberThrusters')as HTMLInputElement).value);
    counter = 0;
    //check numbers
    while (counter < 3 && (isNaN(thrusters))) {
        text = ("You really must pick up one of the choices below");
        writeOne(text);
        thrusters = parseInt((document.getElementById('numberThrusters')as HTMLInputElement).value);
        counter++;
    }
    (counter == 3 && isNaN(thrusters)) ? finalMistake() : thrusters;
    console.log(thrusters);
    return thrusters;
}
// creation of objects
const newRocket    = (str: string) => arrAll.push(rocket = new Rocket(str));
const newThrusters = (arr: any[]) => arr.map((e: number) => rocket.addArrThrusters(thruster = new Thruster(e, maxSpeed)));

// add operations arr
const addNum = (arr: number[]) => arr.reduce((a: number, b: number) => a + b);
// DOCUMENTATION
// get elements type
// https://stackoverflow.com/questions/49062640/unable-to-cast-htmlselectelement-in-typescript/49063277