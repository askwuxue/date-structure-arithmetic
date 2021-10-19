function missingNumber(nums: number[]): number {
  let i = 0
  let j: number = nums.length - 1
  while (i <= j) {
    const mid:number = i + Math.floor((j - i) / 2)
    if (nums[mid] === mid) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
};