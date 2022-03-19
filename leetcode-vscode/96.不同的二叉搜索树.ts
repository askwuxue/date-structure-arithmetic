/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 *
 * https://leetcode-cn.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (69.97%)
 * Likes:    1637
 * Dislikes: 0
 * Total Accepted:    219.1K
 * Total Submissions: 312.8K
 * Testcase Example:  '3'
 *
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：5
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// G(n): 长度为 n 的序列能构成的不同二叉搜索树的个数。
// F(i, n): 以 i 为根、序列长度为 n 的不同二叉搜索树个数(1 ≤ i ≤ n)。
// G(2) = F(1, 2) + F(2, 2)
// F(i, n) = G(i - 1) * G(n - i)

// @lc code=start
function numTrees(n: number): number {
  if (n < 2) {
    return n;
  }
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}
// @lc code=end
