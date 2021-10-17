function fib(n: number): number {
  let p = 0, q = 0, r = 1
  const MOD = 1000000007
  if (n < 2) {
    return n
  }
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = (p + q) % MOD
  }
  return r
};