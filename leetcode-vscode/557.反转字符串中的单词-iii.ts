/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  if (s.length === 0 || s === null) {
    return ''
  }
  const tempArray = s.split(' ');
  const len = tempArray.length
  for (let i = 0; i < len; ++i) {
      tempArray[i] = [...tempArray[i]].reverse().join('')
  }
  return tempArray.join(' ')
};
// @lc code=end

