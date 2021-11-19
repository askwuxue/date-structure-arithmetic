/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const len = nums.length
  const res = []
  if (nums === null || len < 3) {
    return res
  }
  // 正序
  nums.sort((v1, v2) => v1 - v2)
  // 寻找第一个数
  for (let first = 0; first < len; first++) {
    // 第一个数重复
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    let thrid = len - 1
    let target = -nums[first]
    // 寻找第二个数
    for (let second = first + 1; second < len; second++) {
      // 第二个数重复
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }
      // 最后两个数相加结果大于第一个数的相反数
      while (nums[second] + nums[thrid] > target && second < thrid) {
        thrid--
      }
      // 第二个数和第三个数相等
      if (second === thrid) {
        break
      }
      if (nums[second] + nums[thrid] === target) {
        let list: number[] = []
        list.push(nums[first])
        list.push(nums[second])
        list.push(nums[thrid])
        res.push(list)
      }
    }
  }
  return res
};
// @lc code=end