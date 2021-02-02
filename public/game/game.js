"use strict";
// A refactorizar con parámetros. Predomina la entrega. 
// boton
var rockeButton = document.querySelector('#boton3').addEventListener('click', moveRocket);
var rockeButton1 = document.querySelector('#boton4').addEventListener('click', stopRocket);
var rockeButton2 = document.querySelector('#boton5').addEventListener('click', moveRocket1);
var rockeButton3 = document.querySelector('#boton6').addEventListener('click', stopRocket1);
var rocketHtml = document.querySelector('#rocket');
var rocketHtml1 = document.querySelector('#rocket2');
function moveRocket() {
    rocketHtml.classList.add('clicked');
}
function stopRocket() {
    speedMe(rocketHtml);
}
function moveRocket1() {
    rocketHtml1.classList.add('clicked');
}
function stopRocket1() {
    speedMe(rocketHtml1);
}
// timer 
function speedMe(htmlObj) {
    setTimeout(() => {
        htmlObj.classList.remove('clicked');
    }, 1000);
}
//# sourceMappingURL=game.js.map