/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ')

    arr.reverse()

    arr = arr.filter(word => {
        return word != ''
    })

    return arr.join(' ')
};