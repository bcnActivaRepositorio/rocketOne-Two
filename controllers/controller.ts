"use strict"
console.log("controller ts works");
var rocket: Rocket;
var thruster: Thruster;
var arrAll: Rocket[] = new Array;

// array for power numbers
var arrThree: Number[] = new Array;
var arrSix: Number[] = new Array;
// fake ones
var rocket1: Rocket;
var rocket2: Rocket;
// get to action fakes
(document.getElementById('boton1') as HTMLInputElement).addEventListener('click', creation);

// helpers
var counter: number = 0;
var found:  boolean = false;
var text:   string  = "";
var text1:  string  = "";
var arrSix: Number[] = [30, 40, 50, 50, 30, 10];
var arrThree: Number[] = [10, 30, 80];
var maxSpeed: number = 0;
// print me 
var writeMe = (document.querySelector('#textMe')as HTMLElement);
var writeMe2 = (document.querySelector('#textMe2')as HTMLElement);

// lets get real
(document.querySelector('#boton2') as HTMLInputElement).addEventListener('click',realOne);

function creation(){
 console.log('I do work as I should');
 arrAll.push(rocket1 = new Rocket("32HJKLFR"));
 arrThree.map((e: any) => rocket1.addArrThrusters(thruster = new Thruster(e, maxSpeed)));
 arrAll.push(rocket2 = new Rocket("LDSFJA32"));
 arrSix.map((e: any) => rocket2.addArrThrusters(thruster = new Thruster(e, maxSpeed)));
 console.log(arrAll);
 console.log(rocket1.toString());
 console.log(rocket2.toString());
 displayFields('divShow1');
 text = `${rocket1.toString()} & ${rocket2.toString()}`;
 writeMe.innerHTML = text;
 dissapear();
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
    
}
function fastTwo(){

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
function faster(){
    console.log('faster works');
}
function brakes(){
    console.log('brake works');
}
//check if it is in the arr 
function checkNameRockets(str: string){

let findMe = arrAll.find((element: any) => element.name == str);
console.log(findMe)
return findMe;
}
// Name rocket
function myName() {
    // data
    // why the freeking prompt don't take string as data?? JEZZ!!!
    let inputName: any = (document.querySelector('#rocketName') as HTMLInputElement).value;
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

    let thrusters: any = parseInt((document.getElementById('numberThrusters')as HTMLInputElement).value);
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
const newThrusters = (arr: any) => arr.map((e: any) => rocket.addArrThrusters(thruster = new Thruster(e, maxSpeed)));
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