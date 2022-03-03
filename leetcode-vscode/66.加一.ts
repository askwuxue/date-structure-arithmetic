/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const index = digits.length - 1
  let carry = 0
  while (index >= 0) {
    let sum = digits[index] + carry + 1
    if (sum > 9) {
      carry = ~~(sum / 10)
      digits[index] = sum % 10
    } else {
      digits[index] = sum
      return digits
    }
  }
  if (carry > 0) {
    digits.push(carry)
  }
  return digits
};
// @lc code=end

