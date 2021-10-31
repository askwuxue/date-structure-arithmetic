function translateNum(num: number): number {
  const str: string = String(num)
  const arr: string[] = Array.from(str)
  let p = 0, q = 0, r = 1
  const len = arr.length
  for (let i = 0; i < len; ++i) {
    p = q
    q = r
    r = 0
    r += q
    let temp: number = Number.parseFloat(arr[i - 2] + arr[i - 1])
    if (i < 2) {
      return r
    }
    if (temp >= 10 && temp <= 25) {
      r += p
    }
  }
  return r
};