/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  if (nums === null || nums.length < 3) {
    return nums.reduce((prev, curr) => prev + curr)
  }
  const len = nums.length
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((v1, v2) => v1 - v2)
  for (let first = 0; first < len; ++first) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    let second = first + 1, thrid = len - 1
    while (second < thrid) {
      let sum = nums[first] + nums[second] + nums[thrid]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum === target) {
        return sum
      }
      if (sum > target) {
        --thrid
      } else {
        ++second
      }
    }
  }
  return res
};
// @lc code=end

