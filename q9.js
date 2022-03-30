/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false

    let reverser = x.toString().split('').reverse().join('')

    return x === parseInt(reverser)
};