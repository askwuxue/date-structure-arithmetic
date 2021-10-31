function lengthOfLongestSubstring(s: string): number {
  let size: number = 0
  let start: number = 0
  let end: number = 0
  const set= new Set()
  const len: number = s.length
  while (end < len) {
    if (set.has(s[end])) {
      size = Math.max((end - start), size)
      set.delete(s[start])
      start++
    } else {
      set.add(s[end])
      end++
    }
  }
  size = Math.max((end - start), size)
  return size
};