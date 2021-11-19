/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
const updateLongestCommonPrefix = (prefix, str) => {
  let index = 0
  let len = Math.min(prefix.length, str.length)
  while (index < len) {
    if (prefix[index] !== str[index]) {
      break
    }
    index++
  }
  return prefix.substring(0, index)
}
function longestCommonPrefix(strs: string[]): string {
  let len = strs.length
  if (strs === null || len === 0) {
    return ''
  }
  let prefix = strs[0]
  for (let i = 0; i < len; ++i) {
    if (prefix.length === 0) {
      return ''
    }
    prefix = updateLongestCommonPrefix(prefix, strs[i])
  }
  return prefix
};
// @lc code=end

