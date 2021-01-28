"use strict";
console.log("thrusters ts works");
class Thruster {
    constructor(power, maxPower) {
        this.power = power;
        this.maxPower = maxPower;
    }
    // get & set
    get myPower() {
        return this.power;
    }
    set myPower(power) {
        this.power = power;
    }
    get myMaxPower() {
        return this.maxPower;
    }
    set myMaxPower(maxPower) {
        this.maxPower = maxPower;
    }
    // methods
    toString() {
        console.log('tostyring thruster works');
    }
}
//# sourceMappingURL=thrusters.js.map