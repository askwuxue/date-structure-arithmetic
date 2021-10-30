function reverseWords(s: string): string {
  if (s.length === 0) {
    return s
  }
  const sArr: string[] = s.trim().split(" ")
  const len: number = sArr.length - 1
  let res = ' '
  for (let i = len; i >= 0; --i) {
    if (sArr[i] === '') {
      continue
    }
    res += sArr[i] + ' '
  }
  return res.trim()
};