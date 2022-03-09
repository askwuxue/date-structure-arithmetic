function replaceSpace(s: string): string {
  const len = s.length;
  const res: string[] = new Array(len * 3);
  let index = 0;
  for (let i = 0; i < len; ++i) {
    if (s[i] === " ") {
      res[index++] = "%";
      res[index++] = "2";
      res[index++] = "0";
    } else {
      res[index] = s[i];
      ++index;
    }
  }
  return res.join("");
}
