/*
 * @lc app=leetcode.cn id=433 lang=typescript
 *
 * [433] 最小基因变化
 *
 * https://leetcode-cn.com/problems/minimum-genetic-mutation/description/
 *
 * algorithms
 * Medium (53.33%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 36.5K
 * Testcase Example:  '"AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]'
 *
 * 一条基因序列由一个带有8个字符的字符串表示，其中每个字符都属于 "A", "C", "G", "T"中的任意一个。
 *
 * 假设我们要调查一个基因序列的变化。一次基因变化意味着这个基因序列中的一个字符发生了变化。
 *
 * 例如，基因序列由"AACCGGTT" 变化至 "AACCGGTA" 即发生了一次基因变化。
 *
 * 与此同时，每一次基因变化的结果，都需要是一个合法的基因串，即该结果属于一个基因库。
 *
 * 现在给定3个参数 — start, end,
 * bank，分别代表起始基因序列，目标基因序列及基因库，请找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回
 * -1。
 *
 * 注意：
 *
 *
 * 起始基因序列默认是合法的，但是它并不一定会出现在基因库中。
 * 如果一个起始基因序列需要多次变化，那么它每一次变化之后的基因序列都必须是合法的。
 * 假定起始基因序列与目标基因序列是不一样的。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * start: "AACCGGTT"
 * end:   "AACCGGTA"
 * bank: ["AACCGGTA"]
 *
 * 返回值: 1
 *
 *
 * 示例 2：
 *
 *
 * start: "AACCGGTT"
 * end:   "AAACGGTA"
 * bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
 *
 * 返回值: 2
 *
 *
 * 示例 3：
 *
 *
 * start: "AAAAACCC"
 * end:   "AACCCCCC"
 * bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
 *
 * 返回值: 3
 *
 *
 */

// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
  const step = new Set<string>();
  let minStepCount = Number.MAX_SAFE_INTEGER;
  const dfs = (
    step: Set<string>,
    stepCount: number,
    current: string,
    end: string,
    bank: string[]
  ) => {
    // 开始基因和结束基因一致
    if (current === end) {
      minStepCount = Math.min(stepCount, minStepCount);
      return;
    }
    // 遍历基因库
    for (let str of bank) {
      let diff = 0;
      // 遍历基因库中的基因
      for (let i = 0; i < str.length; i++) {
        // 基因库中的基因和开始基因差别少于等于1个字符
        if (current.charAt(i) !== str.charAt(i)) {
          // 字符串相差一个字符以上
          if (++diff > 1) break;
        }
      }

      if (diff === 1 && !step.has(str)) {
        step.add(str);
        dfs(step, stepCount + 1, str, end, bank);
        step.delete(str);
      }
    }
  };
  dfs(step, 0, start, end, bank);
  return minStepCount === Number.MAX_SAFE_INTEGER ? -1 : minStepCount;
}
// @lc code=end
