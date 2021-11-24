/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1, p2 = n - 1
  let tail = m + n - 1
  let curr = 0
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      curr = nums2[p2--]
    } else if (p2 === -1) {
      curr = nums1[p1--]
    } else if (nums2[p2] > nums1[p1]) {
      curr = nums2[p2--]
    } else {
      curr = nums1[p1--]
    }
    nums1[tail--] = curr
  }
};
// @lc code=end

