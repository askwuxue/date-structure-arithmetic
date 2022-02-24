/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (nums: number[], target: number, lower: boolean): number => {
    let left = 0, right = nums.length - 1
    let res = nums.length
    while (left <= right) {
      let mid = ~~((right + left) / 2)
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1
        res = mid
      } else {
        left = mid + 1
      }
    }
    return res
  }
  
  // 寻找大于等于target的左边
  let leftIndex = binarySearch(nums, target, true)
  let rightIndex = binarySearch(nums, target, false) - 1
  // 判断查到的index是否符合要求
  if (leftIndex >= 0 && rightIndex < nums.length && leftIndex <= rightIndex && target === nums[leftIndex] && target === nums[rightIndex]) {
    return [leftIndex, rightIndex]
  } else {
    return [-1, -1]
  }
};
// @lc code=end

