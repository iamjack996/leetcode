/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const array = nums1.concat(nums2)
    array.sort(function (a, b) { return a - b })

    const len = array.length

    if (len % 2) { // 奇數
        return array[Math.ceil(len / 2) - 1]
    } else { // 偶數
        return (array[len / 2 - 1] + array[len / 2]) / 2
    }
};