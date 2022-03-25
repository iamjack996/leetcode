/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let len = 0
    let array = []
    let arrayIndex = 0

    for (i = 0; i < s.length; i++) {
        if (array.includes(s[i])) {
            len = (array.length > len) ? array.length : len
            array = []
            i = arrayIndex // 下一次迴圈從 arrayIndex+1開始
        } else {
            if (array.length < 1) arrayIndex = i
            array.push(s[i])
        }
    }

    len = (array.length > len) ? array.length : len

    return len
};