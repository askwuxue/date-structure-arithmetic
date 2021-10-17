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

function reversePrint(head: ListNode | null): number[] {
  const stack = []
  const res = []
  while (head) {
    stack.push(head.val)
    head = head.next
  }
  
  while (stack.length) {
    res.push(stack.pop())
  }
  return res
};