/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    let a = []
    a[1] = 1
    a[2] = 2

    for (i = 3; i <= n; i++) {
        a[i] = a[i - 1] + a[i - 2]
    }

    return a[n]
};



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