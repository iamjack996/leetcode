function isLetters(str) {
    var re = /^[A-Za-z0-9]+$/;
    if (str.match(re) == null)
        return false;
    else
        return true;
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let arr = s.split('').filter(char => {
        return isLetters(char)
    })
    let arr2 = arr.map(char => {
        return char.toLowerCase()
    })

    let str = arr2.join('')
    let reverseStr = arr2.reverse().join('')

    return str == reverseStr
};