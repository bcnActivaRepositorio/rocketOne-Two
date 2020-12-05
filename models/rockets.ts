"use strict"
console.log("rockets ts works");
class Rocket {
    // atributos
    private name: string;
    private arrThrusters: Thruster [] = new Array;

    // construtor
    constructor(name: string){
        this.name = name;
    }
    // get and set
    public get myName(){
        return this.name;
    }
    public set myName(name:string){
        this.name = name;
    }
    // methods therefore comportament
    public addArrThrusters(thruster: Thruster){

        this.arrThrusters.push(thruster);
    }
    public showThrusters(){
        let showThem: any = this.arrThrusters.map((e: any) => e.power);
        return showThem;
    }
    public showMaxPower(){
        let showThem: any = this.arrThrusters.map((e: any) => e.maxPower);
        return showThem;
    }

    public accelerate(){
        this.arrThrusters.map((e: any) => (e.power == 0) ? e.maxPower = e.maxPower : e.maxPower = e.maxPower + 10);
        this.arrThrusters.map((e: any) => (e.power == 0) ? e.power = 0 : e.power = e.power - 10);
        return this.arrThrusters;
    }
    public brake(){
        this.arrThrusters.map((e: any) => (e.maxPower == 0) ? e.power = e.power : e.power = e.power + 10);
        this.arrThrusters.map((e: any) => (e.maxPower == 0) ? e.maxPower = 0 : e.maxPower = e.maxPower - 10);
        return this.arrThrusters;
    }
    public toString(){
        console.log('tostring works');
        let text: string = "";
        text = `${this.name} rocket with ${this.arrThrusters.length} thrusters ready to operate`;
        return text;
    }
}