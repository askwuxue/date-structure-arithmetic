function permutation(s: string): string[] {
  const res: string[] = []
  const list: string[] = []
  const len = s.length
  s = [...s].sort().join('')
  if (len === 0) {
    return res
  }
  const used: boolean[] = new Array(len).fill(false)
  const backtrace = (s: string, res: string[], list: string[], used: boolean[], len: number): void => {
    if (list.length === len) {
      res.push(list.join(''))
      return
    }
    for (let i = 0; i < len; i++) {
      if (i > 0 && s[i] === s[i - 1] && used[i - 1] === false) {
        continue
      }
      if (used[i] === false) {
        used[i] = true
        list.push(s[i])
        backtrace(s, res, list, used, len)
        list.pop()
        used[i] = false
      }
    }
  }
  backtrace(s, res, list, used, len)
  return res
};