function translateNum(num: number): number {
  const str: string = String(num)
  const arr: string[] = Array.from(str)
  // let p = 0, q = 0, r = 1
  const dp: number[] = []
  dp[0] = 1
  dp[1] = 1
  const len = arr.length
  for (let i = 2; i <= len; ++i) {
    let temp: number = Number.parseFloat(arr[i - 2] + arr[i - 1])
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2]
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[len]
};