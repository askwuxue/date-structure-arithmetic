/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    let sLen = s.length
    let tLen = t.length
    if (sLen !== tLen) {
        return false
    }
    let table = new Array(26).fill(0)
    for (const key of s) {
        table[key.codePointAt() - 'a'.codePointAt()]++
    }
    for (const key of t) {
        table[key.codePointAt() - 'a'.codePointAt()]--
        if (table[key.codePointAt() - 'a'.codePointAt()] < 0) {
            return false
        }
    }
    return true
};
