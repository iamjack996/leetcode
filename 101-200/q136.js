/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let count = {}
    nums.forEach(num => {
        if (count[num]) {
            count[num] = count[num] + 1
        } else {
            count[num] = 1
        }
    })

    for (const num in count) {
        if (count[num] == 1) {
            return num
        }
    }
};