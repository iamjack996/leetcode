/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let has = false
    matrix.forEach(row => {
        row.forEach(num => {
            if (target == num) {
                has = true
                return false
            }
        })
    })

    return has
};