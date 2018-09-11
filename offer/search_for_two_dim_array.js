function Find(target, array)
{
    let rows = array.length - 1;
    let cols = 0;
    while ((rows >= 0) && (cols <= array[0].length - 1)) {
        if (target > array[rows][cols]) {
            cols++;
        } else if (target < array[rows][cols]) {
            rows--;
        } else {
            return true;
        }
    }
    return false;
}
console.log(Find(14,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));

let arr = [[1,4,5,7], [4,8,11,14], [7,13,16,19]];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 21);
    if(Find(randomNum, arr)) {
        console.log(`${randomNum}  :在${arr}中`);
    } else {
        console.log(`${randomNum}  :不在${arr}中`);
    }
}
