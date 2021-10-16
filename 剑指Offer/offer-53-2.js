/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const search = function(nums, target) {
  const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length -1; res = nums.length
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2)
      if (nums[mid] > target || (lower && nums[mid] >= target) ) {
        right = mid - 1
        res = mid
      } else {
        left = mid + 1
      }
    }
    return res
  }
  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false) - 1
  if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
    return rightIndex - leftIndex + 1
  }
  return 0
};