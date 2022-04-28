/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    for (i = m; i < nums1.length; i++) {
        nums1.splice(i, 1)
        i--
    }

    nums2.forEach(num => {
        nums1.push(num)
    })

    nums1.sort(function (a, b) { return a - b })
};