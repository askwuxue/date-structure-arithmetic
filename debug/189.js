/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const reverse = (nums, start, end) => {
    while (start < end) {
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      ++start
      --end
    }
  }
  const len = nums.length
  k %= len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
  return nums
}

rotate()
