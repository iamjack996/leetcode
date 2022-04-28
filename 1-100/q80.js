/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let exists = {}
    let count = 0
    for (i = 0; i < nums.length; i++) {
        if (!exists[nums[i]]) {
            count++
            exists[nums[i]] = 1
        } else {
            if (exists[nums[i]] > 1) {
                nums.splice(i, 1)
                i--
            } else {
                count++
                exists[nums[i]] = 2
            }
        }
    }
};