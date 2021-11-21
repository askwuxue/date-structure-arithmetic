/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 * 整数向下取整，负数向上取整 ~~
 */

// @lc code=start
function reverse(x: number): number {
  let rev = 0
  while (x !== 0) {
    const digit = x % 10
    x = ~~(x / 10)
    rev = rev * 10 + digit
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0
    }
  }
  return rev
};
// @lc code=end

