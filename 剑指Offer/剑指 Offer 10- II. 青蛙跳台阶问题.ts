function numWays(n: number): number {
  let p:number = 0, q: number = 0, r: number = 1;
  const MOD:number = 1000000007
  for (let i = 0; i < n; ++i) {
    p = q
    q = r
    r = (p + q) % MOD
  }
  return r
};