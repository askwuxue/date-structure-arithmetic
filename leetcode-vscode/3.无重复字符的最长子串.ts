/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  let start = 0
  let end = 0
  let res = 0
  const set = new Set<string>()
  while (end < len) {
    if (set.has(s[end])) {
      res = Math.max((end - start), res)
      set.delete(s[start])
      start++
    } else {
      set.add(s[end])
      end++
    }
  }
  res = Math.max((end - start), res)
  return res
};
// @lc code=end

