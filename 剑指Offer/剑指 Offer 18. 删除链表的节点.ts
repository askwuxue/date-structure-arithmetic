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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head
  }
  if (head.val === val) {
    // head = head.next
    return head.next
  }
  let pre: ListNode = head
  let curr: ListNode = head.next
  while (curr !== null && curr.val !== val) {
    pre = curr
    curr = curr.next
  }
  if (curr.val === val) {
    pre.next = curr.next
  }
  return head
};