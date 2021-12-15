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
  if (head === null) {
    return []
  }
  let currHead = head
  let len = 0
  while (currHead) {
    ++len
    currHead = currHead.next
  }
  let res:number[] = []
  currHead = head
  while (currHead) {
    res[--len] = currHead.val
    currHead = currHead.next
  }
  return res
};