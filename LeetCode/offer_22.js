/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function(head, k) {
  let fast = head
  let slow = head
  while (fast !== null && k > 0) {
    fast = fast.next
    --k
  }
  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}