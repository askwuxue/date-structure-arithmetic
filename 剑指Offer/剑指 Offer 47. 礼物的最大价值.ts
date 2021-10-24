function maxValue(grid: number[][]): number {
  const rows: number = grid.length
  const cols: number = grid[0].length
  // 初始化第一列
  for (let i = 1; i < rows; i++) {
    grid[i][0] += grid[i - 1][0]
  }
  // 初始化第一行
  for (let j = 1; j < cols; j++) {
    grid[0][j] += grid[0][j - 1]
  }
  // for (let i = 0; i < rows; i++) {
  //   for (let j = 0; j < cols; j++) {
  //     if (i === 0 && j === 0) {
  //       continue
  //     }
  //     if (i === 0) {
  //       grid[i][j] += grid[i][j - 1]
  //     } else if (j === 0) {
  //       grid[i][j] += grid[i - 1][j]
  //     } else {
  //       grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
  //     }
  //   }
  // }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
    }
  }
  return grid[rows - 1][cols - 1]
};