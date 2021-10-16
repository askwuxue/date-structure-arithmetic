/**
* @param {string} s
* @param {number} n
* @return {string}
*/
var reverseLeftWords = function(s, n) {
  let res = ''
  const len = s.length
  for (let i = n; i < n + len; ++i) {
    res += s.charAt(i % len)
  }
  return res
};