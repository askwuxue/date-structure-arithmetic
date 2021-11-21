/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1
  while (low <= high) {
    // const mid = Math.floor((high - low) / 2) + low
    const mid = ~~((high - low) / 2) + low
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] > target) {
      high = mid - 1
    }
    if (nums[mid] < target) {
      low = mid + 1
    }
  }
  return -1
};
// @lc code=end

