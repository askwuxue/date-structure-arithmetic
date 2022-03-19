/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 *
 * https://leetcode-cn.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (72.54%)
 * Likes:    1102
 * Dislikes: 0
 * Total Accepted:    175.3K
 * Total Submissions: 240.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 *
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 *
 * 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,2,3,4]
 * 输出: [24,12,8,6]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [-1,1,0,-3,3]
 * 输出: [0,0,9,0,0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 10^5
 * -30 <= nums[i] <= 30
 * 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 *
 *
 *
 *
 * 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 *
 */

// @lc code=start
// function productExceptSelf(nums: number[]): number[] {
//   const len = nums.length;
//   const leftMax: number[] = [];
//   const rightMax: number[] = [];
//   leftMax[0] = 1;
//   for (let i = 1; i < len; ++i) {
//     leftMax[i] = leftMax[i - 1] * nums[i - 1];
//   }
//   rightMax[len - 1] = 1;
//   for (let i = len - 2; i >= 0; --i) {
//     rightMax[i] = rightMax[i + 1] * nums[i + 1];
//   }
//   const res: number[] = [];
//   for (let i = 0; i < len; ++i) {
//     res[i] = leftMax[i] * rightMax[i];
//   }
//   return res;
// }
// @lc code=end

function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const answer: number[] = [];
  answer[0] = 1;
  for (let i = 1; i < len; ++i) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  let rightMax = 1;
  for (let i = len - 1; i >= 0; --i) {
    answer[i] = answer[i] * rightMax;
    rightMax = rightMax * nums[i];
  }
  return answer;
}
