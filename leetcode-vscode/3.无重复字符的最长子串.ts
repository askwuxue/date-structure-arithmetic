/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// function lengthOfLongestSubstring(s: string): number {
//   const len = s.length;
//   let rk = -1;
//   let res = 0;
//   const set = new Set<string>();
//   for (let i = 0; i < len; ++i) {
//     if (i !== 0) {
//       set.delete(s[i - 1]);
//     }
//     while (rk + 1 < len && !set.has(s[rk + 1])) {
//       set.add(s[rk + 1]);
//       ++rk;
//     }
//     res = Math.max(res, rk - i + 1);
//   }
//   return res;
// }

function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  let start = 0;
  let end = 0;
  let res = 0;
  const set = new Set<string>();
  while (end < len) {
    if (set.has(s[end])) {
      //   res = Math.max(res, end - start);
      set.delete(s[start]);
      ++start;
    } else {
      set.add(s[end]);
      ++end;
    }
    res = Math.max(res, end - start);
  }
  return res;
}
// @lc code=end
