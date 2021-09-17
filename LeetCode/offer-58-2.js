/**
* @param {string} s
* @param {number} n
* @return {string}
*/
var reverseLeftWords = function(s, n) {
  const len = s.length
  return s.substring(n, len) + s.substring(0, n)
};