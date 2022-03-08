/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const dfs = (
    candidates: number[],
    start: number,
    target: number,
    path: number[]
  ) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...path]);
      return;
    }
    for (let index = start; index < candidates.length; ++index) {
      if (candidates[index] <= target) {
        path.push(candidates[index]);
        dfs(candidates, index, target - candidates[index], path);
        path.pop();
      }
    }
  };
  dfs(candidates, 0, target, path);
  return res;
}

// const backtrace = (
//   candidates: number[],
//   res: number[][],
//   comb: number[],
//   index: number,
//   target: number,
//   len: number
// ) => {
//   if (index === len) {
//     return;
//   }
//   if (target === 0) {
//     res.push([...comb]);
//     return;
//   }
//   // 跳过当前数
//   backtrace(candidates, res, comb, index + 1, target, len);
//   // 重复使用当前数
//   if (target - candidates[index] >= 0) {
//     comb.push(candidates[index]);
//     backtrace(candidates, res, comb, index, target - candidates[index], len);
//     comb.pop();
//   }
// };
// function combinationSum(candidates: number[], target: number): number[][] {
//   const res: number[][] = [];
//   const comb: number[] = [];
//   const len = candidates.length;
//   backtrace(candidates, res, comb, 0, target, len);
//   return res;
// }
// @lc code=end
