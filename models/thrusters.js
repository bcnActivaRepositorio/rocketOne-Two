"use strict";
console.log("thrusters ts works");
var Thruster = /** @class */ (function () {
    function Thruster(power) {
        this.power = power;
    }
    Object.defineProperty(Thruster.prototype, "myPower", {
        // get & set
        get: function () {
            return this.power;
        },
        set: function (power) {
            this.power = power;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Thruster.prototype.addPower = function () {
        this.power = this.power + 10;
        return this.power;
    };
    Thruster.prototype.takePower = function () {
        this.power = this.power - 10;
        return this.power;
    };
    Thruster.prototype.toString = function () {
        console.log('tostyring thruster works');
    };
    return Thruster;
}());
