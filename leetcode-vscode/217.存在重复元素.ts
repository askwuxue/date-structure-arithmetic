/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 2 || nums === null) {
    return false
  }
  const set = new Set<number>()
  for (let key of nums) {
    if (set.has(key)) {
      return true
    } else {
      set.add(key)
    }
  }
  return false
};
// @lc code=end

