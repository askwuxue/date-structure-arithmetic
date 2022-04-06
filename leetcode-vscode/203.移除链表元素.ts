/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (52.29%)
 * Likes:    859
 * Dislikes: 0
 * Total Accepted:    331.1K
 * Total Submissions: 622.1K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [], val = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [7,7,7,7], val = 7
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 列表中的节点数目在范围 [0, 10^4] 内
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 迭代
// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (head === null) {
//     return head;
//   }
//   let dummyHead = new ListNode(-1);
//   dummyHead.next = head;
//   let curr = dummyHead;
//   while (curr.next !== null) {
//     if (curr.next.val === val) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }
//   return dummyHead.next;
// }

// 递归
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}
// @lc code=end
