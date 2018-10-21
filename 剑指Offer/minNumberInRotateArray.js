function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length == 0) return 0;
    
    let left = 0;
    let right = rotateArray.length - 1;
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (rotateArray[mid] > rotateArray[right]) {
            left = mid + 1;
        } else if (rotateArray[mid] == rotateArray[right]) {
            right = right - 1;
        } else {
            right = mid;
        }
    }
    return rotateArray[left];
}

console.log(minNumberInRotateArray([3,4,5,1,2]));