"use strict"
console.log("thrusters ts works");
class Thruster {
    // atributos
private power: number;
private maxPower: number;

constructor(power: number, maxPower: number){
    this.power = power;
    this.maxPower = maxPower;
}
// get & set
public get myPower(){

    return this.power;
}
public set myPower(power: number){

    this.power = power;
}
public get myMaxPower(){

    return this.maxPower;
}
public set myMaxPower(maxPower: number){

    this.maxPower = maxPower;
}
// methods
public accelerate(){
    if (this.power > 0){
        this.power = this.power - 10;
        this.maxPower = this.maxPower + 10;
    } 
    
}
public toString(){
    console.log('tostyring thruster works');
}

}