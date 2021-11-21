/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 * 初始化一个公共前缀，循环字符串数组，不断的更新公共前缀
 * 更新公共前缀
 * 不断的比较公共前缀和当前字符串位置的字符，如果相等，则index++，不相等直接退出循环，返回从0到index为公共前缀
 * 如果公共前缀的长度为0，则直接退出，不继续更新公共前缀
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

