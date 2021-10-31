function getLeastNumbers(arr: number[], k: number): number[] {
  arr.sort((v1, v2) => v1 - v2)
  const res: number[] = new Array(k)
  for (let i = 0; i < k; i++) {
    res[i] = arr[i]
  }
  return res
};