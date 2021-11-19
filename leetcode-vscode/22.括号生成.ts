/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
const backtrace = (res, list, open, close, max) => {
  if (list.length === max * 2) {
    res.push(list.join(''))
    return
  }
  if (open < max) {
    list.push('(')
    backtrace(res, list, open + 1, close, max)
    list.pop()
  }
  if (close < open) {
    list.push(')')
    backtrace(res, list, open, close + 1, max)
    list.pop()
  }
}
function generateParenthesis(n: number): string[] {
  const res = []
  const list = []
  backtrace(res, list, 0, 0, n)
  return res
};
// @lc code=end

