/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const dfs = (board, x, y) => {
        if (x < 0 || x >= n || y < 0 || y >= m || board[x][y] != 'O') {
            return;
        }
        board[x][y] = 'A';
        dfs(board, x + 1, y);
        dfs(board, x - 1, y);
        dfs(board, x, y + 1);
        dfs(board, x, y - 1);
    }
    let m = board.length;
    if (m === 0) return;
    let n = board[0].length;
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
            if (board[i][j] === 'A') {
                board[i][j] = 'O';
            } else if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }
    return board;
};

const board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
const res = solve(board);
console.log('res: ', res);
