/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows < 2) {
    return s;
  }
  const LEN = s.length;
  let isGoDown = false;
  // 当前处于第几行
  let currentRow = 0;
  let resArr = [];
  let res = "";
  // 几行，就需要几个数组存储对应的数据
  for (let i = 0; i < numRows; ++i) {
    resArr[i] = [];
  }
  for (let i = 0; i < LEN; i++) {
    resArr[currentRow].push(s[i]);
    if (currentRow === 0 || currentRow === numRows - 1) {
      isGoDown = !isGoDown;
    }
    currentRow += isGoDown ? 1 : -1;
  }
  for (const rowArr of resArr) {
    res += rowArr.join("");
  }
  return res;
}
// @lc code=end
