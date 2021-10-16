/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function(nums) {
  const set = new Set()
  const len = nums.length
  for (let i = 0;i < len; ++i) {
    if (set.has(nums[i])) {
      return nums[i]
    }
    set.add(nums[i])
  }
};