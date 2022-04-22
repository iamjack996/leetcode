function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let maxLen = Math.max(a.length, b.length)
    // console.log(maxLen)

    let aRever = reverseString(a)
    let bRever = reverseString(b)
    // console.log(aRever, bRever)

    let sumArr = []
    let toAdd = false
    for (i = 0; i < maxLen; i++) {
        // console.log(aRever[i] ?? 0 , bRever[i] ?? 0)
        let sum = parseInt(aRever[i] ?? 0) + parseInt(bRever[i] ?? 0)
        // console.log(sum)
        if (toAdd) sum++
        if (sum > 1) {
            sum = sum > 2 ? 1 : 0
            toAdd = true
        } else {
            toAdd = false
        }
        // console.log(sum)
        sumArr.push(sum)
    }

    if (toAdd) sumArr.push(1)

    return sumArr.reverse().join('')
};