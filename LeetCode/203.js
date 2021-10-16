/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  const dummyHead = new ListNode()
  dummyHead.next = head
  let temp = dummyHead
  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return dummyHead.next
}

removeElements()
