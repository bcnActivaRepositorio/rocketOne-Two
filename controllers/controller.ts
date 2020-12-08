"use strict"
console.log("controller ts works");
var rocket:   Rocket;
var thruster: Thruster;
var arrAll:   Rocket[] = new Array;

// array for power numbers
var arrThree: Number[] = new Array;
var arrSix:   Number[] = new Array;
// fake ones
var rocket1: Rocket;
var rocket2: Rocket;
// get to action fakes
(document.getElementById('boton1') as HTMLInputElement).addEventListener('click', createOne);
(document.getElementById('boton7') as HTMLInputElement).addEventListener('click', createTwo);
(document.getElementById('boton3') as HTMLInputElement).addEventListener('click', fastOne);
(document.getElementById('boton4') as HTMLInputElement).addEventListener('click', slowOne);
(document.getElementById('boton5') as HTMLInputElement).addEventListener('click', fastTwo );
(document.getElementById('boton6') as HTMLInputElement).addEventListener('click', slowTwo);

// helpers
var counter: number = 0;
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
var writeMe = (document.querySelector('#textMe')as HTMLElement);
var writeMe2 = (document.querySelector('#textMe2')as HTMLElement);

// lets get real
(document.querySelector('#boton2') as HTMLInputElement).addEventListener('click',realOne);

function createOne(){
let name: string = ("32HJKLFR");
 threeThrusters(name);
 console.log(arrAll);
  displayFields('divShow2');
}
function createTwo(){
let name: string = ("LDSFJA32");
sixThrusters(name);
console.log(arrAll);
displayFields('divShow3');

}
// "One ring to rule them all" (J.R.R. Tolkien)
function realOne(){
    console.log('real works');
    // data from name
    let name: string = myName();
    // data from number
    let numThrusters = myNumber();
    // keep functions outside
    ( numThrusters == 3) ? threeThrusters(name) :
    ( numThrusters == 6) ? sixThrusters(name) : finalMistake();

}

function fastOne(){
    clearFields2();
    faster(arrAll[0]);
    arrSpeed = arrAll[0].showThrusters();
    console.log(arrSpeed);
    let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[0].showMaxPower();
    let sumNum2: number = addNum(arrSpeed);
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);
    (sumNum == 0) ? text1 = `No more power available. MaxPower of ${sumNum2} reached` : 
                    text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);
    
    writeTwo(text1);
}
function slowOne(){
    clearFields2();
    brakes(arrAll[0]);
    arrSpeed= arrAll[0].showThrusters();
    console.log(arrSpeed);
    let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[0].showMaxPower();
    let sumNum2: number = addNum(arrSpeed);
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);
    (sumNum2 == 0) ? text1 = `Full power available. MaxPower of ${sumNum2} to be reached` : 
                     text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);
    writeTwo(text1);
}

function fastTwo(){
    clearFields2();
    console.log(arrAll[1]);
    faster(arrAll[1]);
    arrSpeed = arrAll[1].showThrusters();
    console.log(arrSpeed);
    let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[1].showMaxPower();
    let sumNum2: number = addNum(arrSpeed);
    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);
    (sumNum == 0) ? text1 = `No more power available. MaxPower of ${sumNum2} reached` : 
    text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);

writeTwo(text1);
}
function slowTwo(){
    clearFields2();
    brakes(arrAll[1]);
   arrSpeed = arrAll[1].showThrusters();
   console.log(arrSpeed);
   let sumNum: number = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[1].showMaxPower();
    let sumNum2: number = addNum(arrSpeed);

    console.log(`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    text = (`MaxPower at the moment: ${sumNum2}. Power remaining: ${sumNum}`);
    writeOne(text);

    (sumNum2 == 0) ? text1 = `Full power available. MaxPower of ${sumNum2} to be reached` : 
    text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);
    writeTwo(text1);

}


/******************************AUX FUNCTIONS**************************************/
// show the element in the screen
function displayFields(str: string): void{

    (document.getElementById(str) as HTMLInputElement).classList.remove('d-none');
    
}

function threeThrusters(str: string){

    clearFields();
    clearFields2();

    let findMe: any = checkNameRockets(str);
    if(findMe != undefined) {
        text = ` ${str} rocket is already in the database`; 
    } else {
        // create the object
        newRocket(str);
        newThrusters(arrThree);
        console.log(arrAll);
        text = `${rocket.toString()}`;
        text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);

    }
    console.log(text);
    console.log(text1);
    writeOne(text);
    writeTwo(text1);
    

}
function sixThrusters(str: string){

    clearFields();
    clearFields2();

    let findMe: any = checkNameRockets(str); 
    if(findMe != undefined) {
        text = ` ${str} rocket is already in the database`; 
    } else {
        // create the object
        newRocket(str);
        newThrusters(arrSix);
        console.log(arrAll);
        text = `${rocket.toString()}`;
        text1 = (` ${rocket.myName}: ${rocket.showThrusters()}`);

    }
    console.log(text);
    console.log(text1);
    writeOne(text);
    writeTwo(text1);
} 
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
//check if it is in the arr 
function checkNameRockets(str: string){

let findMe: undefined | Rocket = arrAll.find((element: Rocket) => element.myName == str);
console.log(findMe)
return findMe;
}
function positionArr(){
let num: string = "0";
for(num in arrAll){
    num;
}

}
// Name rocket
function myName() {
    // data
    // why the freeking prompt don't take string as data?? JEZZ!!!
    let inputName: string | any = (document.querySelector("#rocketName") as HTMLInputElement).value;
    //you watch their behaviour
    counter = 0;
    // if already entered
    inputName = polishName(inputName);
    // regex name
    let reGex: RegExp = /[0-9]{2}[A-Za-z]{4}/;
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
function polishName(str: string){
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();
        return str;  
 }
 // number thrusters
 function myNumber(){

    let thrusters: number = parseInt((document.getElementById('numberThrusters')as HTMLInputElement).value);
    counter = 0;

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
// final mistake
function finalMistake(){
   
    console.log(" A 404(Not Found) Error. Start again pls"); 
    writeMe.innerHTML = " A 404(Not Found) Error. Start again pls"; 
    
}
// print in screen
function writeOne(str: string){
    clearFields();
    return writeMe.textContent = str;
}
function writeTwo(str: string){
    clearFields2();
    return writeMe2.textContent = str;
}
// clear and check if it works
function clearFields(){
    writeMe.innerText = "";
}
function clearFields2(){
    writeMe2.innerText = "";
}
// dissapear
function dissapear(){
    setTimeout(() => {
    clearFields();
}, 5000);
}