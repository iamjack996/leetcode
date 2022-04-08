/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let arr = []
    for (i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            nums.splice(i, 1)
            i--
        } else {
            arr.push(nums[i])
        }
    }

    return nums.length
};