let selectionSort = (arr) => {
    let min, temp;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let test = (size) => {
    let testArr = [];
    for (let i = 0; i < size; i++) {
        testArr.push(Math.floor(Math.random() * 101));
    }
    return testArr;
}

let tempArr = test(10);
console.log(tempArr);
console.log(selectionSort(tempArr));