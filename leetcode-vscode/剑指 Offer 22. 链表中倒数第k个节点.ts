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

 function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return head
  }
  let slow = head, fast = head
  while (k > 0) {
    fast = fast.next
    k--
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};