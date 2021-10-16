var minMutation = function (start, end, bank) {
    const step = new Set();
    let minStepCount = Number.MAX_SAFE_INTEGER;
    const dfs = (step, stepCount, current, end, bank) => {
        if (current === end) {
            minStepCount = Math.min(stepCount, minStepCount);
            return;
        }
        for (let str of bank) {
            let diff = 0;
            for (let i = 0; i < str.length; i++) {
                if (current.charAt(i) !== str.charAt(i)) {
                    // 字符串相差一个字符以上
                    if (++diff > 1) break;
                }
            }
            // 
            if (diff === 1 && !step.has(str)) {
                step.add(str);
                dfs(step, stepCount + 1, str, end, bank);
                step.delete(str);
            }
        }
    }
    dfs(step, 0, start, end, bank);
    return minStepCount === Number.MAX_SAFE_INTEGER ? -1 : minStepCount;
};
let result = minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"]);
console.log('result: ', result);
// "AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]