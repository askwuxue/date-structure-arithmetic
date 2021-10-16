function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  const row: number = matrix.length
  const rol: number = matrix[0].length
  let rows: number = 0, rols: number = rol - 1
  while (rows < row && rols >= 0) {
    if (target === matrix[rows][rols]) {
      return true
    }
    if (matrix[rows][rols] > target) {
      --rols
    }
    if (matrix[rows][rols] < target) {
      ++rows
    }
  }
  return false
}