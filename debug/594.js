/**
 * @param {number[]} nums
 * @return {number}
 */
// 最长和谐子序列 通过Map 记录每个元素出现的次数 i 和 i + 1出现的最大次数
const findLHS = function (nums) {
  let maxLen = 0
  const map = new Map()
  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
    if (map.has(nums[i] + 1)) {
      maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] + 1))
    }
    if (map.has(nums[i] - 1)) {
      maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] - 1))
    }
  }
  return maxLen
}
