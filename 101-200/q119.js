/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    // a[i](n) = a[i-1](n-1) + a[i-1](n)
    let array = []
    for (i = 0; i <= rowIndex; i++) {
        if (i == 0) {
            array.push([1])
        } else {
            let subArray = []
            for (j = 0; j <= i; j++) {
                subArray.push((array[i - 1][j - 1] ?? 0) + (array[i - 1][j] ?? 0))
            }
            if (i == rowIndex) return subArray
            array.push(subArray)
        }
    }
    return array
};