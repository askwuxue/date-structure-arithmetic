// 伤心，学校的判断系统无法判断我的题目
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.on('line', (line) => {
    let tempArr = line.split(' ');
    if (tempArr.length === 16) {
        let sum = 0;
        for (let i = 0; i < tempArr.length; i++) {
            sum += parseInt(tempArr[i]);
        }
        return console.log(sum);
    } else {
        return
    }
    
});

