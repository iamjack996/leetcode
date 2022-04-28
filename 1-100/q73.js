/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    let x = []
    let y = []
    matrix.forEach((row, key) => {
        row.forEach((num, index) => {
            if (num == 0) {
                x.push(key)
                y.push(index)
            }
        })
    })

    matrix.forEach((row, key) => {
        row.forEach((num, index) => {
            if (x.includes(key)) {
                matrix[key][index] = 0
            } else {
                if (y.includes(index)) {
                    matrix[key][index] = 0
                }
            }
        })
    })
};