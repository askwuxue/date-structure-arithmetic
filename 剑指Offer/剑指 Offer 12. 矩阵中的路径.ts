const check = (i: number, j: number, board: string[][], visited: boolean[][], word: string, k: number): boolean => {
  if (board[i][j] !== word.charAt(k)) {
    return false
  } else if (k === word.length - 1) {
    return true
  }
  const directions: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  visited[i][j] = true
  let result: boolean = false
  for (const [dx, dy] of directions) {
    let newI = i + dx
    let newJ = j + dy
    if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length) {
      if (!visited[i][j]) {
        const flag = check(newI, newJ, board, visited, word, k + 1);
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

function exist(board: string[][], word: string): boolean {
  const m: number = board.length
  const n: number = board[0].length
  const visited: boolean[][] = new Array(m).fill(new Array(n).fill(false))
  // 搜索
  for (let i:number = 0; i < m; ++i) {
    for (let j:number = 0; j < n; ++j) {
      const flag: boolean = check(i, j, board, visited, word, 0)
      if (flag) {
        return true
      }
    }
  }
  return false
};
