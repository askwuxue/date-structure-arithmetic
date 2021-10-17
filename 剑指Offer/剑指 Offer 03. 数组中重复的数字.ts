function findRepeatNumber(nums: number[]): number {
  const set = new Set()
  const len: number = nums.length
  for (let i = 0; i < len; i++) {
    if (set.has(nums[i])) {
      return nums[i]
    }
    set.add(nums[i])
  }
};