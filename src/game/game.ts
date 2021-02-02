// A refactorizar con parámetros. Predomina la entrega. 
// boton
var rockeButton = (document.querySelector('#boton3') as HTMLInputElement).addEventListener('click', moveRocket);
var rockeButton1 = (document.querySelector('#boton4') as HTMLInputElement).addEventListener('click',stopRocket);
var rockeButton2 = (document.querySelector('#boton5') as HTMLInputElement).addEventListener('click',moveRocket1);
var rockeButton3 = (document.querySelector('#boton6') as HTMLInputElement).addEventListener('click',stopRocket1);
var rocketHtml = (document.querySelector('#rocket') as HTMLInputElement);
var rocketHtml1 = (document.querySelector('#rocket2') as HTMLInputElement);

 
 function moveRocket(){
     rocketHtml.classList.add('clicked');
 }
 function stopRocket(){
    speedMe(rocketHtml);
 }
 function moveRocket1(){
     rocketHtml1.classList.add('clicked');
 }
 function stopRocket1(){
   speedMe(rocketHtml1);
 }
 // timer 
 function speedMe(htmlObj: HTMLInputElement){
    setTimeout(() => {
    htmlObj.classList.remove('clicked');
}, 1000);
}
