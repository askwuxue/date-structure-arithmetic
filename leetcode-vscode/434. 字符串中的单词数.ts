function countSegments(s: string): number {
  let ret = 0;
  const retArr = s.split(" ");
  for (const word of retArr) {
    if (word !== "") {
      ++ret;
    }
  }
  return ret;
}
