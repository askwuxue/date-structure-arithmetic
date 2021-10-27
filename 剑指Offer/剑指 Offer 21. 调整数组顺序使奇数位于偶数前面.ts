function exchange(nums: number[]): number[] {
  const len: number = nums.length
  // 奇数
  let i: number = 0
  let j: number = len - 1
  let temp: number
  while (i < j) {
    if (nums[i] % 2 === 1) {
      ++i
    }
    if (nums[j] % 2 === 0) {
      --j
    }
    if (i < j) {
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }
  return nums
};