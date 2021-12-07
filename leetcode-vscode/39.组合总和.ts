/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const path: number[] = []
  const dfs = (candidates: number[], start: number, target: number, path: number[]) => {
    if (target < 0) {
      return 
    }
    if (target === 0) {
      res.push([...path])
      return
    }
    for (let index = start; index < candidates.length; ++index) {
      if (candidates[index] <= target) {
        path.push(candidates[index])
        dfs(candidates, index, target - candidates[index], path)
        path.pop()
      }
    }
  }
  dfs(candidates, 0, target, path)
  return res
};
// @lc code=end

