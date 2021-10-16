/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const len = nums.length
  let res = 0
  for (let i = 0; i < len; ++i) {
    if (nums[i] === target) {
      ++res
    }
  }
  return res
};