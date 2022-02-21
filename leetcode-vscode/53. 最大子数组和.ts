/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    const LEN = nums.length
    let pre = 0
    let res = nums[0]
    for (let i = 0; i < LEN; ++i) {
        pre = Math.max(pre + nums[i], nums[i])
        res = Math.max(res, pre)
    }
    return res
};
// @lc code=end

