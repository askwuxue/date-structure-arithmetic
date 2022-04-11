/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (64.76%)
 * Likes:    550
 * Dislikes: 0
 * Total Accepted:    395.4K
 * Total Submissions: 606.5K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1
 * s 和 t 仅包含小写字母
 *
 *
 *
 *
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
// function isAnagram(s: string, t: string): boolean {
//   const sArr = s.split("");
//   const tArr = t.split("");
//   sArr.sort();
//   tArr.sort();
//   return sArr.join("") === tArr.join("");
// }
function isAnagram(s: string, t: string): boolean {
  const hashMap = new Map<string, number>();
  for (const char of s) {
    if (hashMap.has(char)) {
      hashMap.set(char, hashMap.get(char) + 1);
    } else {
      hashMap.set(char, 0);
    }
  }
  for (const char of t) {
    if (hashMap.has(char) && hashMap.get(char) >= 0) {
      hashMap.set(char, hashMap.get(char) - 1);
    } else {
      return false;
    }
  }
  for (const val of hashMap.values()) {
    if (val >= 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end
