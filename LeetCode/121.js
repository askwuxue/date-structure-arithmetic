/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER
  let maxRes = 0
  const len = prices.length
  for (let i = 0; i < len; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      maxRes = Math.max(maxRes, prices[i] - minPrice)
    }
  }
  return maxRes
};