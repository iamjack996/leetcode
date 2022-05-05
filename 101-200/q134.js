// !!! Time Limit Exceeded
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    for (i = 0; i < gas.length; i++) {
        let remainGas = 0
        let start = i
        console.log('index:', i)
        loop2:
        for (j = 0; j < gas.length; j++) {
            let k = j + i
            k = k > gas.length - 1 ? k - gas.length : k
            console.log('k:', k)
            if (j == 0) {
                remainGas += gas[k]
            } else {
                let costIndex = (k < 1) ? gas.length - 1 : k - 1
                remainGas -= cost[costIndex]
                if (remainGas < 0) break loop2;

                remainGas += gas[k]
            }
            console.log(remainGas)
        }
        // 最後回到原本的station(index)
        remainGas -= cost[i - 1 < 0 ? gas.length - 1 : i - 1]
        console.log('remain:', remainGas)
        if (remainGas >= 0) return start
    }
    return -1
};


// start: 3
// 3:  -0       +gas[3]  = 4
// 4:  -cost[3] +gas[4]  = 8
// 0:  -cost[4] +gas[0]  = 7
// 1:  -cost[0] +gas[1]  = 6
// 2:  -cost[1] +gas[2]  = 5
// 3:  -cost[2]          = 0