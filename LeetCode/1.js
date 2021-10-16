/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let len = nums.length;
    let zeroStack = [];
    let oneStack = [];
    // let index = len - 1;
    while (len) {
        len -= 1;
        if (nums[len] === 1) {
            oneStack.push(nums.pop()); 
        } else {
            zeroStack.push(nums.pop());
        }
    }
    let oneStackLen = oneStack.length;
    let zeroStackLen = zeroStack.length;
    
    // for (let i = 0; ; i++) {
    let i = 0;
    while (oneStack.length) {
        nums[i] = oneStack.pop();
        i += 1;
    }
    while (zeroStack.length) {
        nums[i] = zeroStack.pop();
        i += 1;
    }
    // }
    return nums;
};