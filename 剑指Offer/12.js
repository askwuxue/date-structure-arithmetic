var check = function (i, j, board, visited, word, k) {
    if (board[i][j] !== word.charAt(k)) {
        return false;
    } else if (k === word.length - 1) {
        return true;
    }
    var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    visited[i][j] = true;
    var result = false;
    for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
        var _a = directions_1[_i], dx = _a[0], dy = _a[1];
        var newI = i + dx;
        var newJ = j + dy;
        if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length) {
            if (!visited[newI][newJ]) {
                var flag = check(newI, newJ, board, visited, word, k + 1);
                if (flag) {
                    result = true;
                    break;
                }
            }
        }
    }
    visited[i][j] = false;
    return result;
};
function exist(board, word) {
    var m = board.length;
    var n = board[0].length;
    var visited = new Array(m).fill(new Array(n).fill(false));
    // 搜索
    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            debugger
            var flag = check(i, j, board, visited, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCCED"
const res = exist(board, word)
console.log(res)
