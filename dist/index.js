"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleGreeter = /** @class */ (function () {
    function ConsoleGreeter() {
    }
    ConsoleGreeter.prototype.greet = function (name) {
        console.log("Hello, " + name);
    };
    return ConsoleGreeter;
}());
exports.ConsoleGreeter = ConsoleGreeter;
var DOMGreeter = /** @class */ (function () {
    function DOMGreeter() {
    }
    DOMGreeter.prototype.greet = function (name) {
        document.write("Hello, " + name);
    };
    return DOMGreeter;
}());
exports.DOMGreeter = DOMGreeter;
