/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function dfs(grid: string[][], r: number, c: number) {
  const nr = grid.length;
  const nc = grid[0].length;
  grid[r][c] = "0";
  if (c - 1 >= 0 && grid[r][c - 1] === "1") {
    dfs(grid, r, c - 1);
  }
  if (c + 1 < nc && grid[r][c + 1] === "1") {
    dfs(grid, r, c + 1);
  }
  if (r - 1 >= 0 && grid[r - 1][c] === "1") {
    dfs(grid, r - 1, c);
  }
  if (r + 1 < nr && grid[r + 1][c] === "1") {
    dfs(grid, r + 1, c);
  }
  return;
}

function numIslands(grid: string[][]): number {
  const nr = grid.length;
  const nc = grid[0].length;
  let landNum = 0;
  if (nc === 0) {
    return landNum;
  }
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nc; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        landNum++;
      }
    }
  }
  return landNum;
}
// @lc code=end
