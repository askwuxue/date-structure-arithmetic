function search(nums: number[], target: number): number {
  const len: number = nums.length
  const start: number = nums.findIndex(ele => ele === target)
  if (start === -1) {
    return 0
  }
  const end:number = nums.lastIndexOf(target)
  return end - start + 1
};
