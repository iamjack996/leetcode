/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length < 2) return false
    let left = ['(', '{', '[']
    let right = [')', '}', ']']

    let result = true
    let storge = []
    for (i = 0; i < s.length; i++) {
        // console.log(s[i], right.includes(s[i]))

        storge.push(s[i])
        // console.log(storge)
        if (right.includes(s[i])) { // right
            let last = storge.pop()
            let lastLeft = storge.pop()
            // console.log(last, lastLeft, last !== lastLeft)
            if (right.indexOf(last) !== left.indexOf(lastLeft)) {
                result = false
                break
            }
        }
    }
    if (storge.length > 0) return false
    return result
};