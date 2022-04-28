/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

    const valueList = [
        { char: 'M', val: 1000 },
        { char: 'D', val: 500 },
        { char: 'C', val: 100 },
        { char: 'L', val: 50 },
        { char: 'X', val: 10 },
        { char: 'V', val: 5 },
        { char: 'I', val: 1 }
    ]

    let str = ''
    let number = num

    for (i = 0; i < valueList.length; i++) {
        let { char, val } = valueList[i]

        if (i + 1 < valueList.length) {
            let nextObj = valueList[i + 1]
            if (!nextObj.val.toString().includes('5')) {
                if (Math.floor(number / nextObj.val) == 9) {
                    str += nextObj.char + valueList[i - 1].char
                    number = number - (9 * nextObj.val)
                    continue;
                }

                if (Math.floor(number / nextObj.val) == 4) {
                    str += nextObj.char + valueList[i].char
                    number = number - (4 * nextObj.val)
                    continue;
                }
            }
        }

        let quot = Math.floor(number / val)
        if (quot < 1) continue;
        number = number % val
        str += char.repeat(quot)

    }

    return str
};