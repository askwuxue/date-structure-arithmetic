/**
 * @param {number[]} nums
 * @return {number}
 */

//  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

//  请你设计并实现时间复杂度为O(n) 的算法解决此问题。

const longestConsecutive = function (nums) {
  let maxLen = 0
  const set = new Set(nums)
  const newArr = [...set]
  for (const num of newArr) {
    if (!set.has(num - 1)) {
      let currNum = num
      let currCount = 1
      while (set.has(currNum + 1)) {
        ++currNum
        ++currCount
      }
      maxLen = Math.max(maxLen, currCount)
    }
  }
  return maxLen
}

longestConsecutive()
