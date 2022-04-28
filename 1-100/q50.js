/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    return Math.round(Math.pow(x, n) * 100000) / 100000
};