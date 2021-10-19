function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0 || matrix === null) {
    return false
  }
  const rowL:number = matrix.length - 1
  const colL:number = matrix[0].length - 1
  let row:number = 0
  let col:number = colL
  while (row <= rowL && col >= 0) {
    let num:number = matrix[row][col]
    if (target === num ) {
      return true
    }
    if (num > target) {
      col--
    } else {
      row++
    }
  }
  return false
};