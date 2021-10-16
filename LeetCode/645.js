/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  const res = []
  const map = new Map()
  const len = nums.length
  for (let i = 0; i < len; ++i) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2)
      res.push(nums[i])
    } else {
      map.set(nums[i], 1)
    }
  }
  for (let i = 1; i <= len; ++i) {
    if (!map.has(i)) {
      res.push(i)
    }
  }

  return res
}
