/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let shortestStr = strs.reduce(
        function (a, b) {
            return a.length > b.length ? b : a;
        }
    )
    if (!shortestStr) return ""
    var index = strs.indexOf(shortestStr)
    if (index !== -1) strs.splice(index, 1)

    let same = ''
    let i = 0
    let exec = true
    while (exec) {
        let otherCount = 0
        strs.forEach(str => {
            if (shortestStr[i] == str[i]) otherCount++
        })
        if (otherCount == strs.length) same += shortestStr[i]
        else exec = false

        if (!shortestStr[i + 1]) exec = false
        i++
    }

    return same
};