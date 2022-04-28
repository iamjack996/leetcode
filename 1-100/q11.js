var maxArea = function (height) {
    let max = 0
    let left = 0
    let right = height.length - 1

    for (i = 0; i < height.length; i++) {
        let area = (right - left) * Math.min(height[left], height[right])
        if (area > max) max = area;

        (height[left] > height[right]) ? right-- : left++
    }
    return max
};