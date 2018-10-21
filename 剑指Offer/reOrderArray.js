function reOrderArray(array)
{
    let i = 0;
    let even = 0;
    while (i < array.length - even) {
        if (array[i] % 2 == 0) {
            array.push(array.splice(i, 1)[0]);
            even++;
        } else {
            i++;
        }
    }
    return array;
}

console.log(reOrderArray([1,3,5,7,2,4,6]));