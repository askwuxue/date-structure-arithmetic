/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const len = nums.length
  const used: boolean[] = new Array(len).fill(false)
  const res:number[][] = []
  const list:number[] = []
  const backtrace = (nums, res, list, used, len) => {
    if (len === list.length) {
      res.push([...list])
      return
    }
    for (let i = 0; i < len; ++i) {
      if (!used[i]) {
        used[i] = true
        list.push(nums[i])
        backtrace(nums, res, list, used, len)
        list.pop()
        used[i] = false
      }
    }
  }
  backtrace(nums, res, list, used, len)
  return res
};
// @lc code=end

