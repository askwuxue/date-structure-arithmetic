/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.53%)
 * Likes:    1381
 * Dislikes: 0
 * Total Accepted:    491.3K
 * Total Submissions: 737.5K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[3,2,3]
 * 输出：3
 *
 * 示例 2：
 *
 *
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 *
 *
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const count = (
    nums: number[],
    num: number,
    start: number,
    end: number
  ): number => {
    let count = 0;
    for (let i = start; i <= end; ++i) {
      if (nums[i] === num) {
        ++count;
      }
    }
    return count;
  };

  const majorityElementDFS = (
    nums: number[],
    start: number,
    end: number
  ): number => {
    if (start === end) {
      return nums[start];
    }
    let mid = start + ~~((end - start) / 2);
    let left = majorityElementDFS(nums, start, mid);
    let right = majorityElementDFS(nums, mid + 1, end);
    if (left === right) {
      return left;
    }
    let leftCount = count(nums, left, start, end);
    let rightCount = count(nums, right, start, end);
    return leftCount > rightCount ? left : right;
  };

  return majorityElementDFS(nums, 0, nums.length - 1);
}
// @lc code=end
