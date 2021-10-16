var findContentChildren = function (g, s) {
    if (s.length === 0) return 0;
    g.sort((v1, v2) => v1 - v2);
    s.sort((v1, v2) => v1 - v2);
    let res = 0;
    let gLen = g.length;
    let sLen = s.length;
    let i = 0;
    let j = 0;
    while (i < gLen && j < sLen) {
        console.log('i < gLen && j < sLen: ', i < gLen && j < sLen);
        console.log()
        if (g[i] <= s[j]) {
            // console.log('gLen[i] <= sLen[j]: ', gLen[i] <= sLen[j]);
            ++res;
            // console.log('++res: ', ++res);
            ++i;
            ++j;
        } else {
            ++j;
        }
    }
    return res;
};
let g = [1, 2, 3];
let s = [1, 1];
let result = findContentChildren(g, s);
console.log(result);