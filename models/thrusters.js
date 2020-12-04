"use strict";
console.log("thrusters ts works");
var Thruster = /** @class */ (function () {
    function Thruster(power, maxPower) {
        this.power = power;
        this.maxPower = maxPower;
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
    Object.defineProperty(Thruster.prototype, "myMaxPower", {
        get: function () {
            return this.maxPower;
        },
        set: function (maxPower) {
            this.maxPower = maxPower;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Thruster.prototype.accelerate = function () {
        if (this.power > 0) {
            this.power = this.power - 10;
            this.maxPower = this.maxPower + 10;
        }
    };
    Thruster.prototype.toString = function () {
        console.log('tostyring thruster works');
    };
    return Thruster;
}());
