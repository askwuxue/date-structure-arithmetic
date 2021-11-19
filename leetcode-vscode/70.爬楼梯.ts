/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let p = 0, q = 0, r = 1
  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
};
// @lc code=end

