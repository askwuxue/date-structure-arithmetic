/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
const swap = (nums: number[], i: number, j: number):void => {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

function firstMissingPositive(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1)
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
};
// @lc code=end

