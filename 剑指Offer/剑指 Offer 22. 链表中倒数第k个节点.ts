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
  let temp: ListNode = head
  let len:number = 0
  while (temp !== null) {
    ++len
    temp = temp.next
  }
  let node = null
  for (node = head; len > k; --len) {
    node = node.next
  }
  return node 
};