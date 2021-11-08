function singleNumbers(nums: number[]): number[] {
  let eor = 0
  const len = nums.length
  // 找出出现一次的两个数字的异或结果
  for (let i = 0; i < len; i++) {
    eor ^= nums[i]
  }
  // 提取最右侧的1，则有一个数右侧为1，另一个不为1，因为他们是已获得结果
  let rightOne = eor & ((~eor) + 1)
  let a = 0
  let b = 0
  // 将
  for (let i = 0; i < len; i++) {
    if ((rightOne & nums[i]) !== 0) {
      a ^= nums[i]
    } else {
      b ^= nums[i]
    }
  }
  return [a, b]
};