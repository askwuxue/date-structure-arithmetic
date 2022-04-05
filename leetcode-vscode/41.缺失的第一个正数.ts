// function firstMissingPositive(nums: number[]): number {
//   if (nums === null || nums.length === 0) {
//     return 1
//   }
//   const len = nums.length
//   for(let i = 0; i < len; ++i) {
//     if (nums[i] <= 0) {
//       nums[i] =  len + 1
//     }
//   }
//   for (let i = 0; i < len; ++i) {
//     let num = Math.abs(nums[i])
//     if (num <= len) {
//       nums[num - 1] = -Math.abs(nums[num - 1])
//     }
//   }
//   for (let i = 0; i < len; ++i) {
//     if (nums[i] > 0) {
//       return i + 1
//     }
//   }
//   return len + 1
// };
function firstMissingPositive(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
    if (nums[i] <= 0) {
      nums[i] = len + 1;
    }
  }
  for (let i = 0; i < len; ++i) {
    let num = Math.abs(nums[i]);
    if (num <= len) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return len + 1;
}
