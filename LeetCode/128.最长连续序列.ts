/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const set = new Set([...nums])
  let maxLen = 0
  for (const num of nums) {
    if (!set.has(num - 1)) {
      let currentNum = num
      let currentLen = 1
      while (set.has(currentNum + 1)) {
        currentLen++
        currentNum++
      }
      maxLen = Math.max(maxLen, currentLen)
    }
  }
  return maxLen
};
// @lc code=end

