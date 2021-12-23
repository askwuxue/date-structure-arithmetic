function subarraySum(nums: number[], k: number): number {
  const len = nums.length
  const hashmap = new Map()
  let count = 0
  let pre = 0
  hashmap.set(0, 1)
  for (let i = 0; i < len; ++i) {
    pre += nums[i]
    if (hashmap.has(pre - k)) {
      count += hashmap.get(pre - k)
    }
    if (hashmap.has(pre)) {
      hashmap.set(pre, hashmap.get(pre) + 1)
    } else {
      hashmap.set(pre, 1)
    }
  }
  return count
};