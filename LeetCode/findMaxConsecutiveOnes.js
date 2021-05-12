/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    if (nums.length === 0) return 0;
    let len = nums.length;
    let maxOnes = 0;
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 1) {
            index++;
        } else {
            index = 0;
        }
        maxOnes = index > maxOnes ? index : maxOnes;
    }
    return maxOnes;
};