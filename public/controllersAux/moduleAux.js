"use strict";
// show the element in the screen
function displayFields(str) {
    document.getElementById(str).classList.remove('d-none');
}
function arrDivShow(str) {
    document.getElementById(str).classList.add('visible');
}
function arrDivHide(str) {
    document.getElementById(str).classList.remove('visible');
}
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
function writeThree(str) {
    clearFields3();
    return writeMe3.textContent = str;
}
function writeFour(str) {
    clearFields4();
    return writeMe4.textContent = str;
}
function writeText(obj) {
    return text = `${obj.toString()}`;
}
function writeText1(obj) {
    return text1 = (` ${obj.myName}: ${obj.showThrusters()}`);
}
function rocketIn(str) {
    return text = ` ${str} rocket is already in the database`;
}
// clear and check if it works
function clearFields() {
    writeMe.innerText = "";
}
function clearFields2() {
    writeMe2.innerText = "";
}
function clearFields3() {
    writeMe3.innerText = "";
}
function clearFields4() {
    writeMe4.innerText = "";
}
// find last word of string to help clearfields2
function lastword(str) {
    let word = str.split(" ");
    word = word[word.length - 1];
    return word;
}
// dissapear
function dissapear() {
    setTimeout(() => {
        clearFields();
    }, 5000);
}
//# sourceMappingURL=moduleAux.js.map