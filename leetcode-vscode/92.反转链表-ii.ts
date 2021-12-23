/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

const reverseList = (head: ListNode) => {
  let curr = head
  let pre = null
  while (curr !== null) {
    let next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head === null || left === right) {
    return head
  }
  // 虚拟头节点
  let dummyHead = new ListNode(-1)
  dummyHead.next = head
  let pre = dummyHead

  // left 节点的前一个节点
  for (let i = 0; i < left - 1; ++i) {
    pre = pre.next
  }

  // right 节点
  let rightNode = pre
  for (let i = 0; i < right - left + 1; ++i) {
    rightNode = rightNode.next
  }

  // 切割出来一个子链表
  let leftNode = pre.next
  let curr = rightNode.next

  // 切断链表
  pre.next = null
  rightNode.next = null

  // 反转子链表
  reverseList(leftNode)

  // 链表拼接
  // rightNode 是子链表的头节点
  pre.next = rightNode
  leftNode.next = curr

  return dummyHead.next
};
// @lc code=end

