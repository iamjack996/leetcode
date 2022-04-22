// (!!!) Output Limit Exceeded

let count = 0
const steps = function (sum, n) {
    if (sum == n) {
        count++
        console.log('count++', count)
        return
    }

    for (const step of [1, 2]) {
        // if (sum + step <= n) console.log(sum, step)
        if (sum + step <= n) steps(sum + step, n)
    }
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    for (const step of [1, 2]) {
        steps(step, n)
    }
    return count
};