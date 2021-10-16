/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  const len = nums.length
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]
  for (let i = 1; i < len; ++i) {
    max = Math.max(max * nums[i], Math.max(nums[i], min * nums[i]))
    min = Math.min(min * nums[i], Math.min(nums[i], max * nums[i]))
    res = Math.max(res, max)
  }
  return res
}
maxProduct()
