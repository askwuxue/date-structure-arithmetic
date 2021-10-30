function exist(board: string[][], word: string): boolean {
  const m: number = board.length
  const n: number = board[0].length
  const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  // 这种方式第一次填充使用的是数据的引用，导致第一次填充使用的是同一个数组。修改元素时，二维数组的第二维数组会被全部修改，导致结果不对
  // const visited: boolean[][] = new Array(m).fill(new Array(n).fill(false))
  const visited = new Array(m);
  for (let i = 0; i < visited.length; ++i) {
      visited[i] = new Array(n).fill(false);
  }
  const check = (i: number, j: number, word: string, k: number): boolean => {
    // 二维数组中的数据不等于word的字母值
    if (board[i][j] !== word.charAt(k)) {
      return false
    } else if (k === word.length - 1) {
      return true
    }
    visited[i][j] = true
    let result: boolean = false
    for (const [dx, dy] of directions) {
      let newI = i + dx
      let newJ = j + dy
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n) {
        if (!visited[newI][newJ]) {
          const flag = check(newI, newJ, word, k + 1);
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visited[i][j] = false
    return result
  }

  // 搜索
  for (let i:number = 0; i < m; ++i) {
    for (let j:number = 0; j < n; ++j) {
      const flag: boolean = check(i, j, word, 0)
      if (flag) {
        return true
      }
    }
  }
  return false
};
