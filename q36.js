const onlyNumber = function (array) {
    return array.filter(num => {
        return num != "."
    })
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (i = 0; i < 9; i++) {
        let nums = onlyNumber(board[i])
        if ((new Set(nums)).size != nums.length) return false

        let rowArr = []
        for (j = 0; j < 9; j++) {
            rowArr.push(board[j][i])
        }
        rowArr = onlyNumber(rowArr)
        if ((new Set(rowArr)).size != rowArr.length) return false
    }

    let indexs = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            let numArray = []
            indexs[i].forEach(num => {
                indexs[j].forEach(num2 => {
                    // console.log(num,num2)
                    numArray.push(board[num][num2])
                })
            })
            numArray = onlyNumber(numArray)
            if ((new Set(numArray)).size != numArray.length) return false
        }
    }

    return true
};