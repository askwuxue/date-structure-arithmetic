let mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    return result.concat(left).concat(right);
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
console.log(mergeSort(tempArr));