function lastRemaining(n: number, m: number): number {
  if (n < 2) {
    return n
  }
  
  let res = 0
  for (let i = 2; i != n + 1; ++i) {
    res = (res + m) % i
  }
  return res
};