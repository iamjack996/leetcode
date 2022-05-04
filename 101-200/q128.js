/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    nums.sort(function (a, b) { return a - b })
    nums = [...new Set(nums)] // unique

    let max = 0
    let count = 0
    let arr = []
    for (i = 0; i < nums.length; i++) {
        if (!count) {
            arr.push(nums[i])
            count++
        } else {
            if (nums[i] - arr[arr.length - 1] == 1) {
                arr.push(nums[i])
                count++
            } else {
                max = Math.max(max, count)

                count = 0
                arr = []
                i--
            }
        }
    }
    max = Math.max(max, count)

    return max
};