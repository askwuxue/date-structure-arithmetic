/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const len = nums.length
  let i = 0, j = len - 1
  while (i <= j) {
    const mid = Math.floor(i + (j - i) / 2)
    if (nums[mid] === mid) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
};