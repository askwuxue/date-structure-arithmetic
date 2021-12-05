/*
 * @lc app=leetcode.cn id=611 lang=typescript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
function triangleNumber(nums: number[]): number {
  const len = nums.length
  if (len < 3) {
    return 0
  }
  nums.sort((v1, v2) => v1 - v2)
  let res = 0
  // 第一条边
  for (let i = 0; i < len; ++i) {
    let k = i
    for (let j = i + 1; j < len; ++j) {
      while (k + 1 < len && nums[k + 1] < nums[i] + nums[j]) {
        ++k
      }
      res += Math.max(k - j, 0)
    }
  }
  return res
};
// @lc code=end

