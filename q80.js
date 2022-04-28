/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let first = []
    let second = []
    let count = 0
    for (i = 0; i < nums.length; i++) {
        if (!first.includes(nums[i])) {
            count++
            first.push(nums[i])
        } else {
            if (!second.includes(nums[i])) {
                count++
                second.push(nums[i])
            } else {
                nums.splice(i, 1)
                i--
            }
        }
    }
    return count
};