const maxProfit = (prices) => {
    // index
    let buy = 0
    let sell = 1

    let max = 0

    while (sell < prices.length) {
        if (prices[buy] > prices[sell]) {
            buy = sell
        } else {
            max = Math.max(max, prices[sell] - prices[buy])
            sell++
        }
    }

    return max
};