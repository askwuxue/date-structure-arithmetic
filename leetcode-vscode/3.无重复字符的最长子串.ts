/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 * 滑动窗口的思想
 * 初始化起始位和结束为分别为0
 * 使用set确保唯一性
 * 循环，结束条件为 结束位等于给定字符串长度
 * 如果结束位存在于set，则最长子串为Math.max((end - start), res), 说明子串重复，删除set中起始位start，并且起始
 * 位加1
 * 如果结束位不存在set，说明子串没有重复，当前数加入set，结束位end++
 * 最终的最长子串长度为res
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

