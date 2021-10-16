/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const len = prices.length
  let max = 0
  for (let i = 1; i <= len; ++i) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1]
    }
  }
  return max
}

const prices = [7, 1, 5, 3, 6, 4]
const res = maxProfit(prices)
console.log('res: ', res)
