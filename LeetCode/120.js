/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  const len = triangle.length
  const dp = new Array(len + 1).fill(0).map(() => new Array(len + 1).fill(0))
  console.log('dp: ', dp)
  for (let i = len - 1; i >= 0; --i) {
    for (let j = 0; j <= i; ++j) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
      console.log('dp[i][j]: ', dp[i][j])
    }
  }
  return dp[0][0]
}
const params = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
const res = minimumTotal(params)
console.log('res: ', res)
