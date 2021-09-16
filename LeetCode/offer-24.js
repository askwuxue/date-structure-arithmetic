/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  if (head === null || head.next === null) {
    return head 
  }
  let pre = null
  let curr = head
  while (curr !== null) {
    let temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
  }
  return pre
};