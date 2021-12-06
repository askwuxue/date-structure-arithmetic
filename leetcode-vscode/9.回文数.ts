/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || x % 10 === 0 && x !== 0) {
    return false
  }
  let reverseNumber = 0
  while (x > reverseNumber) {
    reverseNumber = reverseNumber * 10 + Math.floor(x % 10)
    x = Math.floor(x / 10)
  }
  return reverseNumber === x || Math.floor(reverseNumber / 10) === x
};
// @lc code=end

