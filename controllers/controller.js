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
//add visible fakes
// get to action fakes
var buttOne = document.getElementById('boton1').addEventListener('click', createOne);
var buttTwo = document.getElementById('boton7').addEventListener('click', createTwo);
// (document.getElementById('boton8') as HTMLInputElement).addEventListener('click', displayFields2);
// helpers
var counter = 0;
var i = 0;
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
function createOne() {
    var name = ("32HJKLFR");
    var num = 3;
    numThrusters(name, num);
    displayFields('divShow2');
    displayFields('divShow4');
}
function createTwo() {
    var name = ("LDSFJA32");
    var num = 6;
    numThrusters(name, num);
    displayFields('divShow3');
}
console.log(arrAll);
// "One ring to rule them all" (J.R.R. Tolkien)
function fastOne(str) {
    clearFields2();
    arrDivShow(str);
    i = indexBotton();
    faster(arrAll[i]);
    arrSpeed = arrAll[i].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[i].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum == 0) ? text1 = "No more power available. MaxPower of " + sumNum2 + " reached" :
        text1 = (" " + arrAll[i].myName + ": " + arrAll[i].showThrusters());
    writeTwo(text1);
    arrDivHide(str);
}
function slowOne(str) {
    clearFields2();
    arrDivShow(str);
    i = indexBotton();
    brakes(arrAll[i]);
    arrSpeed = arrAll[i].showThrusters();
    console.log(arrSpeed);
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    arrSpeed = arrAll[i].showMaxPower();
    var sumNum2 = addNum(arrSpeed);
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    writeOne(text);
    (sumNum2 == 0) ? text1 = "Full power available. MaxPower of " + sumNum2 + " to be reached" :
        text1 = (" " + arrAll[i].myName + ": " + arrAll[i].showThrusters());
    writeTwo(text1);
    arrDivHide(str);
}
console.log(arrAll);
/******************************AUX FUNCTIONS**************************************/
// show the element in the screen
function displayFields(str) {
    document.getElementById(str).classList.remove('d-none');
}
function displayFields2() {
    displayFields('divShow1');
}
function arrDivShow(str) {
    document.getElementById(str).classList.add('visible');
}
function arrDivHide(str) {
    document.getElementById(str).classList.remove('visible');
}
// number of thrusters revisited
function numThrusters(str, num) {
    clearFields();
    clearFields2();
    var findMe = checkNameRockets(str);
    if (findMe != undefined) {
        rocketIn(str);
    }
    else {
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
    writeTwo(text1);
} // end number thrusters
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
// find the index of the boton
function indexBotton() {
    var findDiv = (document.getElementsByClassName("showDiv"));
    var pickMe = document.getElementsByClassName("visible");
    counter = 0;
    for (var i_1 = 0; i_1 < findDiv.length; i_1++) {
        if (findDiv[i_1].isEqualNode(pickMe[0])) {
            console.log("finally worked");
            counter = i_1;
        }
        else {
            console.log("Keep searching");
        }
    }
    return counter;
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
    var reGex = /[0-9]{2}[A-Za-z]{6}/;
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
function writeText(obj) {
    return text = "" + obj.toString();
}
function writeText1(obj) {
    return text1 = (" " + obj.myName + ": " + obj.showThrusters());
}
function rocketIn(str) {
    return text = " " + str + " rocket is already in the database";
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
