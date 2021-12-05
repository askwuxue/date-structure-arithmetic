/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  let res = 0
  const len = s.length
  for (let i = 0; i < len; ++i) {
    if (i < len - 1 && map.get(s[i]) < map.get(s[i + 1])) {
      res -= map.get(s[i])
    } else {
      res += map.get(s[i])
    }
  }
  return res
};
// @lc code=end

