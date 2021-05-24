function checkSum(nums, k) {
    let sum = new Array(nums.length);
    sum[0] = nums[0];
    let map = new Map();
    map.set(sum[0], 0);
    for (let i = 1; i < nums.length; i++) {
        sum[i] = nums[i] + sum[i - 1];
        map.set(sum[i], i);
    }

    console.log(map);
    console.log(sum);

    for (let i = 0; i < nums.length; i++) {
        // 存在任意的两个，前n个数之和Sum1和Sum2。假设Sum1 > Sum2。如果存在一个片段的和为k, 则 k = Sum1 - Sum2
        if (map.has(sum[i] + k)) {
            return true
        }
    }
    return false;
}

let arr1 = [1, 2, 3, -7, 4, 5, 6];
let res = checkSum(arr1, -1);
console.log('res: ', res);