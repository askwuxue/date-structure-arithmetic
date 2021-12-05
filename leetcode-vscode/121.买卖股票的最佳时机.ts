/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_SAFE_INTEGER
  let prefix = 0
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else {
      prefix = Math.max(prefix, price - minPrice)
    }
  }
  return prefix
};
// @lc code=end

