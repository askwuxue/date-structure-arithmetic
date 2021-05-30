function checkSum(nums, k) {
    let sum = new Array(nums.length);
    let map = new Map();
    sum[0] = nums[0];
    map.set(sum[0], 0);
    for (let i = 1; i < nums.length; i++) {
        sum[i] = nums[i] + sum[i - 1];
        map.set(sum[i], i);
    }
    console.log(map)

    for (let i = 0; i < nums.length; i++) {
        // 存在任意的两个，前n个数之和Sum1和Sum2。假设Sum1 > Sum2。如果存在一个片段的和为k, 则 k = Sum1 - Sum2
        // console.log(sum[i]);
        if (map.has(sum[i] + k)) {
            if (k === 0) {
                if (sum[i] === 0 || )
            }
            return true;
        }
    }
    return false;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let res = checkSum(arr1, 11);
console.log('res: ', res);