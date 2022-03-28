/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 *
 * https://leetcode-cn.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (58.39%)
 * Likes:    482
 * Dislikes: 0
 * Total Accepted:    90.1K
 * Total Submissions: 147.9K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * 给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。
 *
 * 请你找出并返回只出现一次的那个数。
 *
 * 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [1,1,2,3,3,4,4,8,8]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums =  [3,3,7,7,10,11,11]
 * 输出: 10
 *
 *
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= nums.length <= 10^5
 * 0 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
function singleNonDuplicate(nums: number[]): number {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = left + ~~((right - left) / 2);
    if (nums[mid] === nums[mid ^ 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
// function singleNonDuplicate(nums: number[]): number {
//   return nums.reduce((prev: number, curr: number) => prev ^ curr);
// }
// @lc code=end
