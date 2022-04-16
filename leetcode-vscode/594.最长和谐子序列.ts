/*
 * @lc app=leetcode.cn id=594 lang=typescript
 *
 * [594] 最长和谐子序列
 *
 * https://leetcode-cn.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (56.61%)
 * Likes:    319
 * Dislikes: 0
 * Total Accepted:    65.5K
 * Total Submissions: 115.9K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。
 *
 * 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。
 *
 * 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,2,2,5,2,3,7]
 * 输出：5
 * 解释：最长的和谐子序列是 [3,2,2,2,3]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：2
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,1,1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^9
 *
 *
 */

// @lc code=start
// function findLHS(nums: number[]): number {
//   let res = 0;
//   let start = 0;
//   nums.sort((v1, v2) => v1 - v2);
//   const len = nums.length;
//   for (let i = 1; i < len; ++i) {
//     while (nums[i] - nums[start] > 1) {
//       ++start;
//     }
//     if (nums[i] - nums[start] === 1) {
//       res = Math.max(res, i - start + 1);
//     }
//   }
//   return res;
// }
function findLHS(nums: number[]): number {
  const map = new Map<number, number>();
  let res = 0;
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  for (const num of nums) {
    if (map.has(num + 1)) {
      res = Math.max(res, map.get(num) + map.get(num + 1));
    }
  }
  return res;
}
// @lc code=end
