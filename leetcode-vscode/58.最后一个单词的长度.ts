/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
// function lengthOfLastWord(s: string): number {
//   let s1 = s.trim()
//   let arr: string[] = s1.split(' ')
//   return arr[arr.length - 1].length
// };
function lengthOfLastWord(s: string): number {
  let index = s.length - 1
  while(s.charAt(index) === ' ') {
    --index
  }
  let lastLength = 0
  while (index >= 0 && s.charAt(index) !== ' ') {
    --index
    ++lastLength
  }
  return lastLength
};
// @lc code=end

