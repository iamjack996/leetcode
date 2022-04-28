/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    return undefined != nums.find(num => {
        return num == target
    })
};