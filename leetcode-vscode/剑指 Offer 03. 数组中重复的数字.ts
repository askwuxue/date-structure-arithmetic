function findRepeatNumber(nums: number[]): number {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (i === nums[i]) {
      i++
      continue
    }
    if (nums[nums[i]] === nums[i]) {
      return nums[i]
    }
    let temp = nums[i]
    nums[i] = nums[temp]
    nums[temp] = temp
  }
  return -1
};