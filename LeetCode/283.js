/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    const len = nums.length;
    let left = 0;
    let right = 0;
    const swap = (left, right, nums) => {
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
    }
    while (right < len) {
        if (nums[right] !== 0) {
            swap(left, right, nums)
            left++
        }
        right++
    }
};
