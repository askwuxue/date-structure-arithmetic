let bubleSort = (arr) => {
    let temp;
    for (let i = arr.length; i > 1; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
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

let randomArr = test(10);
console.log(randomArr);
console.log(bubleSort(randomArr));