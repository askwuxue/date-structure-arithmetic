function minNumber(nums: number[]): string {
  const strs: string[] = nums.map((num) => num.toString());
  strs.sort((a: string, b: string) => {
    let ab = a + b;
    let ba = b + a;
    // ignore
    return Number(ab) - Number(ba);
  });
  return strs.join("");
}
