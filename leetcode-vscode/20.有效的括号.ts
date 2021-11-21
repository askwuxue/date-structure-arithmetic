/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const len = s.length
  if (len % 2 === 1) {
    return false
  }
  const stack: string[] = []
  const map = new Map<string, string>([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ])
  
  for (let key of s) {
    if (map.has(key)) {
      if (stack.length === 0 || map.get(key) !== stack[stack.length - 1]) {
        return false
      }
      stack.pop()
    } else {
      stack.push(key)
    }
  }
  return !stack.length
};
// @lc code=end

