function minArray(numbers: number[]): number {
  const len:number = numbers.length
  let left:number = 0
  let right:number = len - 1
  while (left <= right) {
    let mid:number = left + Math.floor((right - left) / 2)
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[left]) {
      right = mid
    } else {
      right -= 1
    }
  }
  return numbers[left]
};