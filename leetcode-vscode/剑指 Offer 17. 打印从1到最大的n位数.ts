function printNumbers(n: number): number[] {
  let ret = 0;
  let res: number[] = [];
  for (let i = 0; i < n; ++i) {
    ret = ret * 10 + 9;
  }
  for (let i = 1; i <= ret; ++i) {
    res.push(i);
  }
  return res;
}
