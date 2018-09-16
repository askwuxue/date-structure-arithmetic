function merge(left, right) {
    var res = [];
    // 对于左右进行比对，将较小的元素放在临时数组，同时该数组移除首位元素，比对下一个元素，当其中一个数组比对结束，另一个数组的剩余部分全部添加到临时数组中
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            res.push(right.shift());
        } else {
            res.push(left.shift());
        }
    }
    return res.concat(left).concat(right);
}

function mergeSort (arr) {
    if (arr.length == 1) return arr;
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    // 递归，分治的思想 ，将一个序列左右分，分到只剩一个元素，然后进行合并排序
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2,8,4,6,8,9,1,3]));
