/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 *
 * https://leetcode-cn.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (44.92%)
 * Likes:    767
 * Dislikes: 0
 * Total Accepted:    165.1K
 * Total Submissions: 364K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X'
 * 填充。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：board =
 * [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O'
 * 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 *
 *
 * 示例 2：
 *
 *
 * 输入：board = [["X"]]
 * 输出：[["X"]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == board.length
 * n == board[i].length
 * 1
 * board[i][j] 为 'X' 或 'O'
 *
 *
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dfs = (board, x, y) => {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] != "O") {
      return;
    }
    board[x][y] = "A";
    dfs(board, x + 1, y);
    dfs(board, x - 1, y);
    dfs(board, x, y + 1);
    dfs(board, x, y - 1);
  };
  let m = board.length;
  if (m === 0) return;
  let n = board[0].length;
  if (n === 0) return;
  // 首列和尾列边界的处理
  for (let i = 0; i < m; ++i) {
    dfs(board, i, 0);
    dfs(board, i, n - 1);
  }
  // 首行和尾行边界的处理
  for (let j = 1; j < n - 1; ++j) {
    dfs(board, 0, j);
    dfs(board, m - 1, j);
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] === "A") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
// @lc code=end
