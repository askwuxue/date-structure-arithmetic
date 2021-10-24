function maxSubArray(nums: number[]): number {
  const len:number = nums.length
  if (len === 0) {
    return 0
  }
  let maxNumber:number = nums[0]
  const dp: number[] = []
  dp[0] = nums[0]
  for (let i = 1; i < len; ++i) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    maxNumber = Math.max(dp[i], maxNumber)
  }
  return maxNumber
};