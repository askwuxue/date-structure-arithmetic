function fib(n: number): number {
  let p:number = 0, q:number = 0, r:number = 1
  const MOD: number = 1000000007
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