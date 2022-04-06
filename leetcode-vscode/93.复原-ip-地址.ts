/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const SEG_COUNT = 4;
  const res = [];
  const segments: number[] = [];

  const dfs = (s: string, segId: number, segStart: number) => {
    //  ip的段已经遍历完成
    if (segId === SEG_COUNT) {
      //  ip的长度等于字符串的长度
      if (s.length === segStart) {
        res.push(segments.join("."));
      }
      return;
    }

    //  ip段没有遍历完成但是ip的长度已经达到了
    if (s.length === segStart) {
      return;
    }

    // 当前遍历到的字符为0
    if (s[segStart] === "0") {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
    }

    // 递归遍历
    let addr = 0;
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + (s[segEnd].charCodeAt(0) - "0".charCodeAt(0));
      if (addr > 0 && addr <= 0xff) {
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }
  };

  dfs(s, 0, 0);
  return res;
}
// @lc code=end
