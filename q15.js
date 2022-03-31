// Time Limit Exceeded

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

var threeSum = function (nums) {
    if (nums.length < 3) return []

    let ansArray = []

    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            for (k = 0; k < nums.length; k++) {
                if (i != j && i != k && j != k) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        arr = [nums[i], nums[j], nums[k]]
                        arr.sort(function (a, b) { return a - b })

                        let check = ansArray.findIndex(array => {
                            return arrayEquals(array, arr)
                        })

                        if (check == -1) ansArray.push(arr)
                    }
                }
            }
        }
    }

    return ansArray
};