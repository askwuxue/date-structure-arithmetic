let quickSort = (arr) => {
    // 数组长度小于2 返回当前
    if (arr.length < 2) return arr;
    // 基准索引，选取数组中的中间元素的索引
    let pivotIndex = Math.floor(Math.random() * arr.length);
    // 基准元素
    let pivot = arr.splice(pivotIndex, 1);
    // 小于等于基准的数组
    let lesser = [];
    // 大于基准的数组
    let greater = [];
    // 循环遍历，小于等于随机数的放在小于数组中，大于随机数的放在大于数组中
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    // 进行递归
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

// let quickSort = (arr) => {
//     // 数组长度小于2 返回当前
//     if (arr.length < 2) return arr;
//     // 基准索引，选取数组中的中间元素的索引
//     let pivotIndex = Math.floor(arr.length / 2);
//     // 基准元素
//     let pivot = arr.splice(pivotIndex, 1);
//     // 小于等于基准的数组
//     let lesser = [];
//     // 大于基准的数组
//     let greater = [];
//     // 循环遍历，小于等于随机数的放在小于数组中，大于随机数的放在大于数组中
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             lesser.push(arr[i]);
//         } else {
//             greater.push(arr[i]);
//         }
//     }
//     // 进行递归
//     return quickSort(lesser).concat(pivot, quickSort(greater));
// }

let test = (size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr;
}
let tempArr = test(10);
console.log(tempArr);
console.log(quickSort(tempArr));