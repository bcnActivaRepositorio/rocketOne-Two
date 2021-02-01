"use strict";
console.log("rockets ts works");
class Rocket {
    // construtor
    constructor(name) {
        this.arrThrusters = new Array;
        this.name = name;
    }
    // get and set
    get myName() {
        return this.name;
    }
    set myName(name) {
        this.name = name;
    }
    // methods therefore comportament
    addArrThrusters(thruster) {
        this.arrThrusters.push(thruster);
    }
    showThrusters() {
        let showThem = this.arrThrusters.map((e) => e.power);
        return showThem;
    }
    showMaxPower() {
        let showThem = this.arrThrusters.map((e) => e.maxPower);
        return showThem;
    }
    accelerate() {
        this.arrThrusters.map((e) => (e.power == 0) ? e.maxPower = e.maxPower : e.maxPower = e.maxPower + 10);
        this.arrThrusters.map((e) => (e.power == 0) ? e.power = 0 : e.power = e.power - 10);
        return this.arrThrusters;
    }
    brake() {
        this.arrThrusters.map((e) => (e.maxPower == 0) ? e.power = e.power : e.power = e.power + 10);
        this.arrThrusters.map((e) => (e.maxPower == 0) ? e.maxPower = 0 : e.maxPower = e.maxPower - 10);
        return this.arrThrusters;
    }
    toString() {
        console.log('tostring works');
        let text = "";
        text = `${this.name} rocket with ${this.arrThrusters.length} thrusters ready to operate`;
        return text;
    }
}
//# sourceMappingURL=rockets.js.map