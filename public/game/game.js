"use strict";
// A refactorizar con parámetros. Predomina la entrega. 
// boton
var rockeButton = document.querySelector('#boton3');
var rockeButton1 = document.querySelector('#boton4');
var rockeButton2 = document.querySelector('#boton5');
var rockeButton3 = document.querySelector('#boton6');
var rocketHtml = document.querySelector('#rocket');
var rocketHtml1 = document.querySelector('#rocket2');
function moveRocket(str) {
    (str == 'boton3') ? rocketHtml.classList.add('clicked') :
        rocketHtml1.classList.add('clicked');
}
function stopRocket(str) {
    (str == 'boton4') ? speedMe(rocketHtml) : speedMe(rocketHtml1);
}
// timer 
function speedMe(htmlObj) {
    setTimeout(() => {
        htmlObj.classList.remove('clicked');
    }, 1000);
}
//# sourceMappingURL=game.js.map