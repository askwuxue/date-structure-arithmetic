/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 *
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (43.47%)
 * Likes:    1853
 * Dislikes: 0
 * Total Accepted:    231.7K
 * Total Submissions: 526.9K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 *
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形为图中红色区域，面积为 10
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入： heights = [2,4]
 * 输出： 4
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  const len = heights.length;
  const left: number[] = [];
  const right: number[] = [];
  let stack: number[] = [];
  let res = 0;
  for (let i = 0; i < len; ++i) {
    while (
      stack.length !== 0 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  // console.log("left: ", left);
  stack.length = 0;
  for (let i = len - 1; i >= 0; --i) {
    while (
      stack.length !== 0 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? len : stack[stack.length - 1];
    stack.push(i);
  }
  // console.log("right: ", right);

  for (let i = 0; i < len; ++i) {
    res = Math.max(res, (right[i] - left[i] - 1) * heights[i]);
  }
  return res;
}
// @lc code=end
