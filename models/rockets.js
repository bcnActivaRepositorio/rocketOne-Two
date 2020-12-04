"use strict";
console.log("rockets ts works");
var Rocket = /** @class */ (function () {
    // construtor
    function Rocket(name) {
        this.arrThrusters = new Array;
        this.name = name;
    }
    Object.defineProperty(Rocket.prototype, "myName", {
        // get and set
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    // methods therefore comportament
    Rocket.prototype.addArrThrusters = function (thruster) {
        this.arrThrusters.push(thruster);
    };
    Rocket.prototype.showThrusters = function () {
        var showThem = this.arrThrusters.map(function (e) { return e.power; });
        return showThem;
    };
    Rocket.prototype.toString = function () {
        console.log('tostring works');
        var text = "";
        text = this.name + " rocket with " + this.arrThrusters.length + " thrusters ready to operate";
        return text;
    };
    return Rocket;
}());
