/**
 Do not return anything, modify nums in-place instead.
 */
const swap = (nums: number[], i: number, j: number) => {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

const reverse = (nums: number[], start: number) => {
  let left = start
  let right = nums.length - 1
  while (left < right) {
    swap(nums, left, right)
    ++left
    --right
  }
}

function nextPermutation(nums: number[]): void {
  let i = nums.length - 2
  // 从右向左找到第一个最小数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i
  }
  // 从右向左找到第一个最大数，且该最大数尽可能靠右
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[i] >= nums[j]) {
      --j
    }
    // 交换最小数与最大数
    swap(nums, i, j)
  }
  // 将交换后的，从最小数后一位到结尾进行排序
  reverse(nums, i + 1)
};