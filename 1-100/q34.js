/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let indexs = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            if (indexs.length > 0) {
                indexs[1] = i
            } else {
                indexs[0] = i
            }
        }
    }

    if (indexs.length < 2) {
        if (indexs.length < 1) {
            return [-1, -1]
        } else {
            indexs[1] = indexs[0]
        }
    }
    return indexs
};