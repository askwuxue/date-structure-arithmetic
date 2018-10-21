/* 
冒泡排序的思想 从第一个到最后一个元素，以此比较相邻的两个元素，每次选出最大的元素排在最末尾
 */
function bubbleSort (arr) {
    var tempArr = [];
    for (var k = 0; k < arr.length; k++) {
        tempArr[k] = arr[k];
    }
    var temp;
    // 从最后一个元素到第二个元素，比较至少要两个元素，n 个元素循环 n - 1 遍 选出 n - 1 个元素就可以
    for (var i = tempArr.length; i > 1; i--) {
        // 从0 开始到 倒数第二个元素与后面相邻的元素进行比较
        for (var j = 0; j < i - 1; j++) {
            // 当前元素大于相邻的后面的元素 进行位置交换
            if (tempArr[j] > tempArr[j + 1]) {
                temp = tempArr[j + 1];
                tempArr[j + 1] = tempArr[j];
                tempArr[j] = temp;
            }
        }
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
console.log('排序前的序列：', randomArr);
console.log('冒泡排序后：',bubbleSort(randomArr));
