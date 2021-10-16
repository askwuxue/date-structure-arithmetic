/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const r = grid.length;
    const c = grid[0].length;
    if (r === 0) return 0;
    let total = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === '1') {
                ++total;
                dfs(i, j, grid);
            }
        }
    }
    return total;
};

const dfs = (r, c, grid) => {
    let rLen = grid.length;
    let cLen = grid[0].length;
    if (r < 0 || c < 0 || r >= rLen || c >= cLen || grid[r][c] === '0') {
        return;
    }
    grid[r][c] = '0';
    dfs(r + 1, c, grid);
    dfs(r - 1, c, grid);
    dfs(r, c + 1, grid);
    dfs(r, c - 1, grid);
};