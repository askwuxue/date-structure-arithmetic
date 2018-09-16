/* 
选择排序的思想：从当前元素，以此寻找最小的元素
 */
function selectionSort (arr) {
    var tempArr = [];
    for(var k = 0; k < arr.length; k++) {
        tempArr.push(arr[k]);
    }

    var min, temp;
    // 从第一个元素到倒数第二个元素 依次的与后面进行比较
    for (var i = 0; i < tempArr.length - 1; i++) {
        // 让当前元素是最小元素
        var min = i;
        // 循环当前元素后面的元素 判断最小元素是否比后面的元素大 ，如果是进行交换索引
        for (var j = i + 1; j < tempArr.length; j++) {
            if (tempArr[min] > tempArr[j]) {
                min = j;
            }
        }   
        // 最小元素与当前元素进行交换 
        temp = tempArr[i];
        tempArr[i] = tempArr[min];
        tempArr[min] = temp;
    }
    return tempArr;
}


function test (size) {
    var arr = [];
    for (var i = 0; i < size; i ++) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return arr;
 }


var randomArr = test(10);
console.log('排序前：', randomArr);
console.log('排序后：',selectionSort(randomArr));