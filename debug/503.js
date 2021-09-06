/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
    const len = nums.length
    const stack = []
    const res = new Array(len).fill(-1)
    for (let i = 0; i < len * 2 - 1; ++i) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
            res[stack.pop()] = nums[i % len]
        }
        stack.push(i % len)
    }
    return res
};
