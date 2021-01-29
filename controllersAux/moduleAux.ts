"use strict"
// show the element in the screen
function displayFields(str: string): void{

    (document.getElementById(str) as HTMLInputElement).classList.remove('d-none');
    
}

function arrDivShow(str: string): void{

    (document.getElementById(str) as HTMLInputElement).classList.add('visible');
    
}
function arrDivHide(str: string): void{

    (document.getElementById(str) as HTMLInputElement).classList.remove('visible');
    
}
// final mistake
function finalMistake(){
   
    console.log(" A 404(Not Found) Error. Start again pls"); 
    writeMe.innerHTML = " A 404(Not Found) Error. Start again pls"; 
    
}

// print in screen
function writeOne(str: string): string{
    clearFields();
    return writeMe.textContent = str;
}
function writeTwo(str: string): string{
    clearFields2();
    return writeMe2.textContent = str;
}
function writeText(obj: Rocket){
    return text = `${obj.toString()}`;
}
function writeText1(obj: Rocket){
    return text1 = (` ${obj.myName}: ${obj.showThrusters()}`);
}
function rocketIn(str: string): string {
    return text = ` ${str} rocket is already in the database`; 
}
// clear and check if it works
function clearFields(){
    writeMe.innerText = "";
}
function clearFields2(){
    writeMe2.innerText = "";
}
// find last word of string to help clearfields2
function lastword(str: string): any{
    let word: any[] = str.split(" ");
    word = word[word.length - 1];
    return word;
}
// dissapear
function dissapear(){
    setTimeout(() => {
    clearFields();
}, 5000);
}