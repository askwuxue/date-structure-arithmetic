/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  const len1 = num1.length
  const len2 = num2.length
  if (!len1) {
    return num2
  }
  if (!len2) {
    return num1
  }
  let i = len1 - 1, j = len2 - 1
  let res: number[] = []
  let carry = 0
  while (i >= 0 || j >= 0 || carry !== 0) {
    let value1 = i >= 0 ? parseInt(num1[i]) : 0
    let value2 = j >= 0 ? parseInt(num2[j]) : 0
    let currentSum = value1 + value2 + carry
    res.push(currentSum % 10)
    carry = ~~(currentSum / 10)
    i--
    j--
  }
  return res.reverse().join('')
};
// @lc code=end

