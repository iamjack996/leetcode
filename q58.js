/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let lastWordLen = 0

    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] == ' ') {
            if (lastWordLen > 0) break;
        } else {
            lastWordLen++
        }
    }

    return lastWordLen
};