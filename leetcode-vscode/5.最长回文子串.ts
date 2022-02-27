/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 * 动态规划
 * 假设从Si 到 Sj 的字符串表示为[Si, Sj],如果 [Si, Sj]想为回文串，则一定有Si === Sj， 并且[Si+1, Sj-1]为回文串
 * 使用dp[i][j] 标识从i - j 的回文子串的长度，所有长度为1的子串一定是回文串，可以初始化为true
 * 从长度为2开始遍历，i初始值为0， 则 j - i + 1 = L, j = L + i - 1
 * 如果Si === Sj 判断长度，小于3，一定是回文串，大于3，dp[i][j] = dp[i + 1][j - 1]
 * 每轮循环更新maxLen
 * 最终返回
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) {
    return s
  }
  let begin = 0
  let maxLen = 1
  // dp[i][j] = S[i...j]
  const dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array<boolean>(len).fill(false)
  }
  // 所有长度为1的字符串为回文子串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }
  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      // j - i + 1 = L
      let j = L + i - 1
      // 超出边界
      if (j >= len) {
        break
      }
      // 是回文子串
      if (s[i] === s[j]) {
        // 长度小于3一定是回文子串
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          // 是否是回文子串取决于子串是否为回文子串
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 更新最大回文子串的长度以及起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
};
// @lc code=end



// @lc code=start
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) {
    return s
  }
  let begin = 0
  let maxLen = 1
  // dp[i][j] = S[i...j]
  const dp = new Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array<boolean>(len).fill(false)
  }
  // 所有长度为1的字符串为回文子串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }
  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      // 是回文子串
      if (s[i] === s[j]) {
        // 长度小于3一定是回文子串
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          // 是否是回文子串取决于子串是否为回文子串
          dp[i][j] = dp[i + 1][j - 1]
        }
      } else {
        dp[i][j]= false
      }

      // 更新最大回文子串的长度以及起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }
  return s.substring(begin, begin + maxLen)
};

