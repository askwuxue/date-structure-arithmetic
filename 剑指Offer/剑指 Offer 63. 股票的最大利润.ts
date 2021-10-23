function maxProfit(prices: number[]): number {
  let minPrice: number = Number.MAX_SAFE_INTEGER
  let maxProfit: number = 0
  const len:number = prices.length
  for (let i = 0; i < len; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else {
      maxProfit = Math.max((prices[i] - minPrice), maxProfit)
    }
  }
  return maxProfit
};