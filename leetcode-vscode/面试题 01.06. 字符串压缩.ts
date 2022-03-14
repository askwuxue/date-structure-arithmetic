function compressString(S: string): string {
  const len = S.length;
  let res = "";
  let count = 1;
  let char = S.charAt(0);
  for (let i = 1; i < len; ++i) {
    if (char === S[i]) {
      ++count;
    } else {
      res += char + count;
      char = S[i];
      count = 1;
    }
  }
  res += char + count;
  return res.length >= S.length ? S : res;
}
