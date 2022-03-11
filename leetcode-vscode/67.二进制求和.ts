/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (54.08%)
 * Likes:    761
 * Dislikes: 0
 * Total Accepted:    228.3K
 * Total Submissions: 423K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 *
 * 输入为 非空 字符串且只包含数字 1 和 0。
 *
 *
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 *
 *
 * 提示：
 *
 *
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 *
 *
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  let carry = 0;
  let retArr: number[] = [];
  while (p1 >= 0 || p2 >= 0) {
    let val1 = p1 >= 0 ? Number(a[p1]) : 0;
    let val2 = p2 >= 0 ? Number(b[p2]) : 0;
    let sum = val1 + val2 + carry;
    carry = ~~(sum / 2);
    retArr.push(sum % 2);
    --p1;
    --p2;
  }
  if (carry !== 0) {
    retArr.push(carry);
  }
  return retArr.reverse().join("");
}
// @lc code=end
