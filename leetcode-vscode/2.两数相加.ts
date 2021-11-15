/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let head = null
  let tail = null
  let carry = 0
  while (l1 || l2) {
    let value1 = l1 !== null ? l1.val : 0
    let value2 = l2 !== null ? l2.val : 0
    let sum = value1 + value2 + carry
    if (head === null) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)
    if (l1 !== null) {
      l1 = l1.next
    }
    if (l2 !== null) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
};
// @lc code=end

