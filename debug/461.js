/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    // 两数异或 相同为0 不同为1
    let z = x ^ y
    let count = 0
    while (z !== 0) {
        // 记 f(x)f(x) 表示 xx 和 x-1x−1 进行与运算所得的结果（即 f(x)=x~\&~(x-1)f(x)=x & (x−1)），那么 f(x)f(x) 恰为 xx 删去其二进制表示中最右侧的 11 的结果。
        z &= z - 1
        ++count
    }
    return count
};
