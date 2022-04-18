/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 *
 * https://leetcode-cn.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (65.49%)
 * Likes:    1691
 * Dislikes: 0
 * Total Accepted:    227.7K
 * Total Submissions: 350.4K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 *
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 *
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,4,2,2]
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,1,3,4,2]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 10^5
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 如何证明 nums 中至少存在一个重复的数字?
 * 你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？
 *
 *
 */

// @lc code=start
// https://leetcode-cn.com/problems/find-the-duplicate-number/solution/xun-zhao-zhong-fu-shu-by-leetcode-solution/
// 二分查找， 1-n 的mid，如果nums[i] <= mid，且count <= mid 重复元素在右侧
function findDuplicate(nums: number[]): number {
  const len = nums.length;
  let left = 1,
    right = len - 1,
    res = -1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    let count = 0;
    for (let i = 0; i < len; ++i) {
      if (nums[i] <= mid) {
        ++count;
      }
    }
    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
      res = mid;
    }
  }
  return res;
}
// https://leetcode-cn.com/problems/find-the-duplicate-number/solution/287xun-zhao-zhong-fu-shu-by-kirsche/
// 根据链表是否有环判断
function findDuplicate(nums: number[]): number {
  // const len = nums.length;
  let slow = 0,
    fast = 0;
  slow = nums[slow];
  fast = nums[nums[fast]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  let p1 = 0;
  let p2 = slow;
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
}
