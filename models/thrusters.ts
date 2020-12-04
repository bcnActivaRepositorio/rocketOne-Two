"use strict"
console.log("thrusters ts works");
class Thruster {
    // atributos
private power: number;

constructor(power: number){
    this.power = power;
}
// get & set
public get myPower(){

    return this.power;
}
public set myPower(power: number){

    this.power = power;
}
// methods
public toString(){
    console.log('tostyring thruster works');
}

}