"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Substract = exports.Sum = void 0;
function Sum(a, b) {
    console.log("Data received :: ", a, b);
    return a + b;
}
exports.Sum = Sum;
/**
 *
 * @param a the number that will be subtracted from b
 * @param b the number which will be subtracted by a
 * @returns
 */
function Substract(a, b) {
    return b - a;
}
exports.Substract = Substract;
