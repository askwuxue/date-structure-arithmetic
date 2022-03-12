/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (53.90%)
 * Likes:    518
 * Dislikes: 0
 * Total Accepted:    272.3K
 * Total Submissions: 501K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode"
 * 输出: 0
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "loveleetcode"
 * 输出: 2
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "aabb"
 * 输出: -1
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 10^5
 * s 只包含小写字母
 *
 *
 */

// @lc code=start
// function firstUniqChar(s: string): number {
//   const map = new Map<string, number>();
//   for (const char of s) {
//     if (map.has(char)) {
//       map.set(char, map.get(char) + 1);
//     } else {
//       map.set(char, 1);
//     }
//   }
//   let index = 0;
//   for (const char of s) {
//     if (map.get(char) === 1) {
//       return index;
//     }
//     ++index;
//   }
//   return -1;
// }
function firstUniqChar(s: string): number {
  const position = new Map<string, number>();
  const queue = [];
  const len = s.length;
  for (const [index, char] of Array.from(s).entries()) {
    if (!position.has(char)) {
      position.set(char, index);
      queue.push([char, index]);
    } else {
      position.set(char, -1);
      while (queue.length && position.get(queue[0][0]) === -1) {
        queue.shift();
      }
    }
  }
  return queue.length ? queue[0][1] : -1;
}
// @lc code=end
