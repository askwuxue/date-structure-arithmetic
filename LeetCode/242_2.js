/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const sArr = [...s].sort()
    const tArr = [...t].sort()
    const len = s.length
    for (let i = 0; i < len; ++i) {
        if (sArr[i] !== tArr[i]) {
            return false
        }
    }
    return true
};
