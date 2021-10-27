function twoSum(nums: number[], target: number): number[] {
  let left: number = 0
  let right: number = nums.length - 1
  const res: number[] = []
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      ++left
    } else if (nums[left] + nums[right] > target) {
      --right
    } else {
      res.push(nums[left])
      res.push(nums[right])
      return res
    }
  }
  return res
};