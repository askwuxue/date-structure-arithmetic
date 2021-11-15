/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  const len = nums.length
  const res:number[] = []
  let index = 0
  while (index < len) {
    let other = target - nums[index]
    if (map.has(other)) {
      if (index !== map.get(other)) {
        res.push(index)
        res.push(map.get(other))
        return res
      }
    }
    map.set(nums[index], index)
    index++
  }
  return res
};
// @lc code=end

