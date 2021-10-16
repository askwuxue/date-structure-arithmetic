const longestCommonSubsequence = function(text1, text2) {
  const l1 = text1.length
  const l2 = text2.length
  const res = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0))
  for (let i = 1; i <= l1; ++i) {
    for (let j = 1; j <= l2; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        res[i][j] = res[i - 1][j - 1] + 1
      } else {
        res[i][j] = Math.max(res[i - 1][j], res[i][j - 1])
      }
    }
  }
  return res[l1][l2]
}


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
  let l1= text1.length;
  let l2 = text2.length;
  const res = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));
  for (let i = 1; i <= l1; ++i) {
      for (let j = 1; j <= l2; ++j) {
          if (text1[i - 1] === text2[j - 1]) {
              res[i][j] = res[i - 1][j - 1] + 1;
          } else {
              res[i][j] = Math.max(res[i - 1][j], res[i][j - 1])
          }
      }
  }
  return res[l1][l2]
};