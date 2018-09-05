function quickSort (list) {
    if (list.length === 0) return [];
    var randomNum = Math.floor(Math.random() * list.length);
    var pivot = list[randomNum];
    var lesser = [];
    var mid = [];
    var greater = [];
    for(var i = 0; i < list.length; i++) {
        if (pivot > list[i]) {
            lesser.push(list[i]);
        } else if (pivot < list[i]) {
            greater.push(list[i]);
        } else {
            mid.push(list[i]);
        }
    }
    return quickSort(lesser).concat(mid, quickSort(greater));
    // return lesser.concat(mid, greater);
    // console.log(pivot, lesser, mid, greater);
}

console.log(quickSort([5,1,3,5,6,41,2,3,4,8,4,88,1152,65]));