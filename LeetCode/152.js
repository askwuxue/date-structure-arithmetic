/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  const len = nums.length
  const max = []
  const min = []
  max[0] = nums[0]
  min[0] = nums[0]
  for (let i = 1; i < len; ++i) {
    max[i] = Math.max(max[i - 1] * nums[i], Math.max(nums[i], min[i - 1] * nums[i]))
    min[i] = Math.min(min[i - 1] * nums[i], Math.min(nums[i], max[i - 1] * nums[i]))
  }
  return Math.max(...max)
}
maxProduct()
