"use strict";
console.log("controller ts works");
// instanciamos
var rocket;
var thruster;
var arrAll = new Array;
// array for power numbers
var arrThree = new Array;
var arrSix = new Array;
//add visible fakes
// get to action fakes
document.getElementById('boton1').addEventListener('click', createOne);
document.getElementById('boton7').addEventListener('click', createTwo);
var button3 = document.getElementById('boton3');
var button4 = document.getElementById('boton4');
var button5 = document.getElementById('boton5');
var button6 = document.getElementById('boton6');
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
// fake rockets pressed by user
function createOne() {
    clearFields();
    clearFields2();
    var name = ("32HJKLFR");
    var num = 3;
    numThrusters(name, num);
    displayFields('divShow2');
    displayFields('divShow4');
}
function createTwo() {
    clearFields();
    clearFields2();
    var name = ("LDSFJA32");
    var num = 6;
    numThrusters(name, num);
    displayFields('divShow3');
}
console.log(arrAll);
// "One ring to rule them all" (J.R.R. Tolkien)
// now function takes parameter from onclick in html
function fastOne(str, str2) {
    // clear fields form
    clearFields();
    clearFields2();
    // add class visible
    arrDivShow(str);
    // take an index of the arr of objects from the class visible
    i = indexBotton();
    // check which buttons were click
    (str2 == 'boton3' || str2 == 'boton5') ? faster(arrAll[i]) : brakes(arrAll[i]);
    // accelerate the rocket from the index in the arr of bjects
    // faster(arrAll[i]);
    // class method to show the thrusters
    arrSpeed = arrAll[i].showThrusters();
    console.log(arrSpeed);
    // what speed is left thrusters
    var sumNum = addNum(arrSpeed);
    console.log(sumNum);
    // print max power total
    arrSpeed = arrAll[i].showMaxPower();
    // what speed is IN the race from thrusters
    var sumNum2 = addNum(arrSpeed);
    // print two powers
    console.log("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    text = ("MaxPower at the moment: " + sumNum2 + ". Power remaining: " + sumNum);
    // conditionals toprint
    writeOne(text);
    (sumNum == 0) ? text1 = "No more power available. MaxPower of " + sumNum2 + " reached" :
        text1 = (" " + arrAll[i].myName + ": " + arrAll[i].showThrusters());
    writeTwo(text1);
    arrDivHide(str);
}
// no longer needed as parameters helped
// function slowOne same as above but chenges to brakes(arrAll[i])
console.log(arrAll);
/******************************AUX FUNCTIONS**************************************/
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
        (num === 3) ? newThrusters(arrThree) :
            (num === 6) ? newThrusters(arrSix) : finalMistake();
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
// find the index of the button who accianates either power or brake
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
// not in use yet
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
// make sure user makes no mistakes
function polishName(str) {
    str = str.replace(/\s/g, "");
    str = str.toUpperCase();
    return str;
}
// number thrusters
function myNumber() {
    var thrusters = parseInt(document.getElementById('numberThrusters').value);
    counter = 0;
    //check numbers
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
