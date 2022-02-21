/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort((v1, v2) => v1[0] - v2[0])
    const LEN = intervals.length
    let res = []
    for (let i = 0; i < LEN; ++i) {
        let L = intervals[i][0], R = intervals[i][1]
        let merged = []
        let mergeLen = res.length
        if (mergeLen === 0 || res[mergeLen - 1][1] < L) {
            merged[0] = L
            merged[1] = R
            res.push(merged)
        } else {
            res[mergeLen - 1][1] = Math.max(R, res[mergeLen - 1][1])
        }
    }
    return res
};
// @lc code=end

