const numberChar = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

function mixCodeStr(array, digits, prefix = '', key = 0) {

    let codes = numberChar[digits[key]]

    key++
    for (let x of codes) {
        if (digits.length > key) {
            mixCodeStr(array, digits, prefix + x, key)
        } else {
            array.push(prefix + x)
        }
    }

    return array
}

var letterCombinations = function (digits) {
    if (!digits) return []

    let array = []

    return mixCodeStr(array, digits)
};