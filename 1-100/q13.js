/**
 * @param {string} s
 * @return {number}
 */

const numberList = [
    { char: 'M', val: 1000 },
    { char: 'D', val: 500 },
    { char: 'C', val: 100 },
    { char: 'L', val: 50 },
    { char: 'X', val: 10 },
    { char: 'V', val: 5 },
    { char: 'I', val: 1 }
]

const getValueByChar = function (char) {
    return numberList.find(row => {
        return row.char == char
    }).val
}

var romanToInt = function (s) {
    let sum = 0

    for (i = 0; i < s.length; i++) {
        let char = s[i]
        if (s[i + 1] && ['I', 'X', 'C'].includes(char)) {
            let add = false
            switch (char) {
                case 'I':
                    if (['V', 'X'].includes(s[i + 1])) add = true
                    break;
                case 'X':
                    if (['L', 'C'].includes(s[i + 1])) add = true
                    break;
                case 'C':
                    if (['D', 'M'].includes(s[i + 1])) add = true
                    break;
            }

            if (add && char != s[i + 1]) {
                sum += getValueByChar(s[i + 1]) - getValueByChar(char)
                i++
                continue;
            }
        }

        sum += getValueByChar(char)
    }

    return sum
};