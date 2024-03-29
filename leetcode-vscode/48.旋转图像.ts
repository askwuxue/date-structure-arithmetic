/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (73.64%)
 * Likes:    1214
 * Dislikes: 0
 * Total Accepted:    289.1K
 * Total Submissions: 391.3K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 *
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 *
 *
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// function rotate(matrix: number[][]): void {
//   const row = matrix.length;
//   const temp: number[][] = new Array(row).fill([]).map(() => []);
//   for (let i = 0; i < row; ++i) {
//     for (let j = 0; j < row; ++j) {
//       temp[j][row - i - 1] = matrix[i][j];
//     }
//   }
//   for (let i = 0; i < row; ++i) {
//     for (let j = 0; j < row; ++j) {
//       matrix[i][j] = temp[i][j];
//     }
//   }
// }
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const n1 = ~~(n / 2);
  const n2 = ~~((n + 1) / 2);
  for (let i = 0; i < n1; ++i) {
    for (let j = 0; j < n2; ++j) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
}
// @lc code=end
