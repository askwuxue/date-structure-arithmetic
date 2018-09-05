function quickSort (list) {
    if (list.length === 0) return [];
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

console.log(quickSort([1,5,6,45,7,8,1,65,2]));