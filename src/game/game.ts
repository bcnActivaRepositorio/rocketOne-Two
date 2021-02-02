// A refactorizar con parámetros. Predomina la entrega. 
// boton
var rockeButton  = (document.querySelector('#boton3') as HTMLInputElement);
var rockeButton1 = (document.querySelector('#boton4') as HTMLInputElement);
var rockeButton2 = (document.querySelector('#boton5') as HTMLInputElement);
var rockeButton3 = (document.querySelector('#boton6') as HTMLInputElement);
var rocketHtml   = (document.querySelector('#rocket') as HTMLInputElement);
var rocketHtml1  = (document.querySelector('#rocket2') as HTMLInputElement);

 
 function moveRocket(str: string): void{
     (str == 'boton3') ? rocketHtml.classList.add('clicked') :
                         rocketHtml1.classList.add('clicked');    
 }
 function stopRocket(str: string): void{
     (str == 'boton4') ? speedMe(rocketHtml) : speedMe(rocketHtml1);  
 }
 // timer 
 function speedMe(htmlObj: HTMLInputElement): void{
    setTimeout(() => {
    htmlObj.classList.remove('clicked');
}, 1000);
}
