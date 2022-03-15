/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
// function trap(height: number[]): number {
//   const len = height.length
//   let res = 0
//   if (len < 2) {
//     return 0
//   }
//   let leftMax: number[] = []
//   leftMax[0] = height[0]
//   for (let i = 1; i < len; ++i) {
//     leftMax[i] = Math.max(height[i], leftMax[i - 1])
//   }
//   let rightMax: number[] = []
//   rightMax[len - 1] = height[len - 1]
//   for (let i = len - 2; i >= 0; --i) {
//     rightMax[i] = Math.max(height[i], rightMax[i + 1])
//   }
//   for (let i = 0; i < len; ++i) {
//     res += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }
//   return res
// };
function trap(height: number[]): number {
  const len = height.length;
  let left = 0,
    right = len - 1;
  let leftMax = 0,
    rightMax = 0;
  let res = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      res += leftMax - height[left];
      ++left;
    } else {
      res += rightMax - height[right];
      --right;
    }
  }
  return res;
}
// @lc code=end
