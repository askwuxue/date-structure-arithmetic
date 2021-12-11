/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const LEN = nums.length
  let slow = 1
  let fast = 1
  while (fast < LEN) {
    if (nums[fast - 1] !== nums[fast]) {
      nums[slow] = nums[fast]
      ++slow
    }
    ++fast
  }
  return slow
};
// @lc code=end

