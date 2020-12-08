"use strict";
console.log("controller ts works");
var rocket;
var thruster;
var arrAll = new Array;
// array for power numbers
var arrThree = new Array;
var arrSix = new Array;
// fake ones
var rocket1;
var rocket2;
// get to action fakes
document.getElementById('boton1').addEventListener('click', createOne);
document.getElementById('boton7').addEventListener('click', createTwo);
document.getElementById('boton3').addEventListener('click', fastOne);
document.getElementById('boton4').addEventListener('click', slowOne);
document.getElementById('boton5').addEventListener('click', fastTwo);
document.getElementById('boton6').addEventListener('click', slowTwo);
// helpers
var counter = 0;
var found = false;
var text = "";
var text1 = "";
var arrSix = [30, 40, 50, 50, 30, 10];
var arrThree = [10, 30, 80];
var maxSpeed = 0;
// containers to display results
var arrSpeed = new Array;
var arrCopy = new Array;
// print me 
var writeMe = document.querySelector('#textMe');
var writeMe2 = document.querySelector('#textMe2');
// lets get real
document.querySelector('#boton2').addEventListener('click', realOne);
function createOne() {
    var name = ("32HJKLFR");
    threeThrusters(name);
    console.log(arrAll);
    displayFields('divShow2');
}
function createTwo() {
    var name = ("LDSFJA32");
    sixThrusters(name);
    console.log(arrAll);
    displayFields('divShow3');
}
// "One ring to rule them all" (J.R.R. Tolkien)
function realOne() {
    console.log('real works');
    // data from name
    var name = myName();
    // data from number
    var numThrusters = myNumber();
    // keep functions outside
    (numThrusters == 3) ? threeThrusters(name) :
        (numThrusters == 6) ? sixThrusters(name) : finalMistake();
}
function fastOne() {
    clearFields2();
    faster(arrAll[0]);
    arrSpeed = arrAll[0].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[0].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum == 0) ? text1 = "No more power available. MaxPower of " + sumNum2 + " reached" :
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    writeTwo(text1);
}
function slowOne() {
    clearFields2();
    brakes(arrAll[0]);
    arrSpeed = arrAll[0].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[0].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum2 == 0) ? text1 = "Full power available. MaxPower of " + sumNum2 + " to be reached" :
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    writeTwo(text1);
}
function fastTwo() {
    clearFields2();
    console.log(arrAll[1]);
    faster(arrAll[1]);
    arrSpeed = arrAll[1].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[1].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum == 0) ? text1 = "No more power available. MaxPower of " + sumNum2 + " reached" :
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    writeTwo(text1);
}
function slowTwo() {
    clearFields2();
    brakes(arrAll[1]);
    arrSpeed = arrAll[1].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[1].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum2 == 0) ? text1 = "Full power available. MaxPower of " + sumNum2 + " to be reached" :
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    writeTwo(text1);
}
/******************************AUX FUNCTIONS**************************************/
// show the element in the screen
function displayFields(str) {
    document.getElementById(str).classList.remove('d-none');
}
function threeThrusters(str) {
    clearFields();
    clearFields2();
    var findMe = checkNameRockets(str);
    if (findMe != undefined) {
        text = " " + str + " rocket is already in the database";
    }
    else {
        // create the object
        newRocket(str);
        newThrusters(arrThree);
        console.log(arrAll);
        text = "" + rocket.toString();
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    }
    console.log(text);
    console.log(text1);
    writeOne(text);
    writeTwo(text1);
}
function sixThrusters(str) {
    clearFields();
    clearFields2();
    var findMe = checkNameRockets(str);
    if (findMe != undefined) {
        text = " " + str + " rocket is already in the database";
    }
    else {
        // create the object
        newRocket(str);
        newThrusters(arrSix);
        console.log(arrAll);
        text = "" + rocket.toString();
        text1 = (" " + rocket.myName + ": " + rocket.showThrusters());
    }
    console.log(text);
    console.log(text1);
    writeOne(text);
    writeTwo(text1);
}
function faster(obj) {
    obj.accelerate();
    console.log(obj);
    return obj;
}
function brakes(obj) {
    obj.brake();
    console.log(obj);
    return obj;
}
//check if it is in the arr 
function checkNameRockets(str) {
    var findMe = arrAll.find(function (element) { return element.myName == str; });
    console.log(findMe);
    return findMe;
}
function positionArr() {
    var num = "0";
    for (num in arrAll) {
        num;
    }
}
// Name rocket
function myName() {
    // data
    // why the freeking prompt don't take string as data?? JEZZ!!!
    var inputName = document.querySelector("#rocketName").value;
    //you watch their behaviour
    counter = 0;
    // if already entered
    inputName = polishName(inputName);
    // regex name
    var reGex = /[0-9]{2}[A-Za-z]{4}/;
    found = (reGex.test(inputName));
    //first check
    while ((inputName == "" || found == false) && counter < 3) {
        inputName = prompt("Type the name of the rocket. You have " + (2 - counter) + " more tries");
        inputName = polishName(inputName);
        found = (reGex.test(inputName));
        counter++;
    }
    // go and fly by yourself
    return inputName;
}
function polishName(str) {
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();
    return str;
}
// number thrusters
function myNumber() {
    var thrusters = parseInt(document.getElementById('numberThrusters').value);
    counter = 0;
    while (counter < 3 && (isNaN(thrusters))) {
        text = ("You really must pick up one of the choices below");
        writeOne(text);
        thrusters = parseInt(document.getElementById('numberThrusters').value);
        counter++;
    }
    (counter == 3 && isNaN(thrusters)) ? finalMistake() : thrusters;
    console.log(thrusters);
    return thrusters;
}
// creation of objects
var newRocket = function (str) { return arrAll.push(rocket = new Rocket(str)); };
var newThrusters = function (arr) { return arr.map(function (e) { return rocket.addArrThrusters(thruster = new Thruster(e, maxSpeed)); }); };
// add operations arr
var addNum = function (arr) { return arr.reduce(function (a, b) { return a + b; }); };
// final mistake
function finalMistake() {
    console.log(" A 404(Not Found) Error. Start again pls");
    writeMe.innerHTML = " A 404(Not Found) Error. Start again pls";
}
// print in screen
function writeOne(str) {
    clearFields();
    return writeMe.textContent = str;
}
function writeTwo(str) {
    clearFields2();
    return writeMe2.textContent = str;
}
// clear and check if it works
function clearFields() {
    writeMe.innerText = "";
}
function clearFields2() {
    writeMe2.innerText = "";
}
// dissapear
function dissapear() {
    setTimeout(function () {
        clearFields();
    }, 5000);
}
