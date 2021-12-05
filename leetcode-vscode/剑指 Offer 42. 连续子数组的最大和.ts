function maxSubArray(nums: number[]): number {
  let pre = 0
  let maxNumber = nums[0]
  for (const num of nums) {
    pre = Math.max(pre + num, num)
    maxNumber = Math.max(maxNumber, pre)
  }
  return maxNumber
};