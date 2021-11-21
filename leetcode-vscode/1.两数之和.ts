/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 * 使用map，将所有出现的数字的以及下标分别存为key， value
 * 循环nums数组，target - 当前循环到的值 = 另一个值
 * 循环的过程中不断的在map中访问，是否存在另一个值
 * 注意：当前值和寻找的值下标不应该相同
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

