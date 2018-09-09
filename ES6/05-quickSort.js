let quickSort = (arr) => {
    if (arr.length === 0) return [];
    if (arr.length === 1) return arr;
    let randomNum = Math.floor(Math.random() * arr.length);
    let currentNum = arr[randomNum];
    let lesser = [];
    let mid = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < currentNum) {
            lesser.push(arr[i]);
        } else if (arr[i] === currentNum) {
            mid.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return quickSort(lesser).concat(mid, quickSort(greater));
}

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