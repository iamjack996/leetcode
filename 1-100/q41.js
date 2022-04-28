/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let positiveList = nums.filter(num => num > 0)
    if (!positiveList.length) return 1
    positiveList = [...new Set(positiveList)]
    positiveList.sort(function (a, b) { return a - b })

    let newArray = []
    positiveList.forEach(num => {
        newArray.push(num)
    })

    // console.log(newArray)

    let miss = null
    for (i = 0; i < newArray.length; i++) {
        // console.log(newArray[i], i+1, newArray[i] != i+1)
        if (newArray[i] != i + 1) {
            miss = i + 1
            break;
        }
    }

    if (!miss) miss = newArray[newArray.length - 1] + 1
    return miss
};