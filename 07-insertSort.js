/* 
插入排序的思想 从第二个元素开始到最后一个元素，判断当前元素是否比前一个元素小， 以此往前寻找
 */
function insertSort (arr) {
    var tempArr = [];
    for (var k = 0; k < arr.length; k++) {
        tempArr.push(arr[k]);
    }

    var temp, j;
    // 从第二个元素开始循环到最后一个元素
    for (var i = 1; i < tempArr.length; i++) {
        j = i;
        // 暂存当前元素
        temp = arr[i];
        // 判断 当前元素 是否处于至少第二位 且 前一位是否大于等于当前元素 如果是 前一个元素放在当前元素的位置上 继续判断 当前元素暂存元素与前前元素的关系，比较结束，暂存的当前元素放在 当前元素的前面
        while (j > 0 && tempArr[j - 1] >= temp) {
            tempArr[j] = tempArr[j - 1];
            j--;
        }
        tempArr[j] = temp;
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
console.log('排序后：',insertSort(randomArr));