function spiralOrder(matrix: number[][]): number[] { 
    if (matrix.length === 0 || matrix[0].length === 0 || matrix === null) {
        return []
    }
    const ROW_LEN = matrix.length
    const COLUMN_LEN = matrix[0].length
    const TOTAL = ROW_LEN * COLUMN_LEN
    const VISITED = new Array(ROW_LEN).fill(0).map(() => new Array(COLUMN_LEN).fill(false))
    const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const RES: number[] = new Array(TOTAL)
    let row = 0, column = 0
    let directionIndex = 0
    for (let i = 0; i < TOTAL; ++i) {
        RES[i] = matrix[row][column]
        VISITED[row][column] = true
        let nextRow = row + DIRECTIONS[directionIndex][0]
        let nextColumn = column + DIRECTIONS[directionIndex][1]
        if (nextRow < 0 || nextRow >= ROW_LEN || nextColumn < 0 || nextColumn >= COLUMN_LEN || VISITED[nextRow][nextColumn]) {
            directionIndex = (directionIndex + 1) % 4
        }
        row += DIRECTIONS[directionIndex][0]
        column += DIRECTIONS[directionIndex][1]
    }
    return RES
 };