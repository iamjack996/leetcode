/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let negative = x < 0
    // if ( -Math.pow(2, 31) > x || x > Math.pow(2, 31)- 1) return 0

    // console.log( -Math.pow(2, 31), Math.pow(2, 31)- 1)

    reverseStr = x.toString().split('').reverse().join('')

    num = (negative ? '-' : '') + parseInt(reverseStr)

    if (-Math.pow(2, 31) > num || num > Math.pow(2, 31) - 1) return 0

    return num
};