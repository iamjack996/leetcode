/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    let diff = 999999
    let diffSum = 0

    loop1:
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            for (k = 0; k < nums.length; k++) {
                if (i != j && i != k && j != k) {
                    let sum = nums[i] + nums[j] + nums[k]

                    thisDiff = Math.abs(target - sum)
                    if (thisDiff < diff) {
                        diff = thisDiff
                        diffSum = sum

                        if (diff < 1) break loop1;
                    }
                }
            }
        }
    }

    return diffSum
};