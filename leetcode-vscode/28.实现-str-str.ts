/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0
  }
  let m = haystack.length
  let n = needle.length
  for (let i = 0; i + n <= m; ++i) {
    let flag = true
    for (let j = 0; j < n; ++j) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return - 1
};
// @lc code=end

