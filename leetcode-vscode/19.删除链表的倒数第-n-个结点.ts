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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || n <= 0) {
    return null
  }
  let dummy = new ListNode(-1)
  dummy.next = head
  let fast = head
  let slow = dummy
  while (n > 0) {
    fast = fast.next
    --n
  }
  while (fast !== null) {/**
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
   
   function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
     if (head === null || n <= 0) {
       return null
     }
     let dummy = new ListNode(-1)
     dummy.next = head
     let fast = head
     let slow = dummy
     while (n > 0) {
       fast = fast.next
       --n
     }
     while (fast !== null) {
       slow = slow.next
       fast = fast.next
     }
     slow.next = slow.next.next
     let newHead = dummy.next
     return newHead
   };
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  let newHead = dummy.next
  return newHead
};