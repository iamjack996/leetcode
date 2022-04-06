// (!!!) Time Limit Exceeded

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    let ansArray = []

    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            for (k = 0; k < nums.length; k++) {
                for (l = 0; l < nums.length; l++) {
                    let arr = [i, j, k, l]
                    if ([...new Set(arr)].length == 4) {
                        if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
                            let ans = [nums[i], nums[j], nums[k], nums[l]]

                            ans.sort(function (a, b) { return a - b })

                            let check = ansArray.findIndex(array => {
                                return arrayEquals(array, ans)
                            })
                            if (check == -1) ansArray.push(ans)
                        }
                    }
                }
            }
        }
    }
    return ansArray
};