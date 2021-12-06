/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let iMax = nums[0]
  let iMin = nums[0]
  let res = nums[0]
  const LEN = nums.length
  for (let i = 1; i < LEN; ++i) {
    let maxF = iMax
    let minF = iMin
    iMax = Math.max(maxF * nums[i], Math.max(minF * nums[i], nums[i]))
    iMin = Math.min(minF * nums[i], Math.min(maxF * nums[i], nums[i]))
    res = Math.max(res, iMax)
  }
  return res
};
// @lc code=end

