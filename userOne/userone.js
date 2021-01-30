"use strict";
//not to be used just yet
// "One ring to rule them all" (J.R.R. Tolkien)
function realOne() {
    console.log('real works');
    clearFields();
    clearFields2();
    displayFields('divShow1');
    // data from name
    var name = myName();
    // data from number
    var numbers = myNumber();
    // keep functions outside
    (numbers == 3 || 6) ? numThrusters(name, numbers) : finalMistake();
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
