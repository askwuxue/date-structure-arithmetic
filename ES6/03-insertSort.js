let insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let temp = arr[i];
        while (j > 0 && arr[j - 1] >= temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
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
console.log(insertSort(tempArr));