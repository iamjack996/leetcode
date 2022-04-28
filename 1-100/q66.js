let toAdd = false

const arrayToString = function (array, add = false, lastAdd = false) {
    let num = array.join('')
    // console.log(add, num)

    let newNum = (parseInt(num) + (add ? 1 : (toAdd ? 1 : 0))).toString()
    // console.log(newNum)
    newNum = newNum.padStart(array.length, '0')
    let response = newNum.split('')

    toAdd = response.length > array.length
    if (toAdd) {
        if (!lastAdd) response.splice(0, 1)
    }
    // console.log(response)
    return response
}

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    const chunkSize = 15
    let chunkArr = []
    for (let i = 0; i < digits.length; i += chunkSize) {
        let chunk = digits.slice(i, i + chunkSize)
        chunkArr.push(chunk)
    }
    // console.log(chunkArr)

    let answer = []
    for (i = chunkArr.length - 1; i >= 0; i--) {
        let result = arrayToString(chunkArr[i], i == chunkArr.length - 1 ? true : false, i == 0)
        // console.log(result)
        answer.push(result)
    }

    let resp = []
    answer.reverse().forEach(arr => {
        resp = resp.concat(arr)
    })

    return resp
};