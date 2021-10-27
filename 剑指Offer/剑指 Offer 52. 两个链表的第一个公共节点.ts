/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
      return null
    }
    let temp = headA
    const map = new Map()
    while (temp) {
      map.set(temp, true)
      temp = temp.next
    }
    temp = headB
    while (temp) {
      if (map.has(temp)) {
        return temp
      }
      temp = temp.next
    }
    return null
};