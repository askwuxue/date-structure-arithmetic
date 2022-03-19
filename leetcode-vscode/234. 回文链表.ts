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

// function isPalindrome(head: ListNode | null): boolean {
//   const queue: number[] = [];
//   if (head === null) {
//     return false;
//   }
//   let curr: ListNode = head;
//   while (curr !== null) {
//     queue.push(curr.val);
//     curr = curr.next;
//   }

//   let left = 0,
//     right = queue.length - 1;
//   while (left < right) {
//     if (queue[left] === queue[right]) {
//       ++left;
//       --right;
//     } else {
//       return false;
//     }
//   }
//   return left >= right;
// }
function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  const findMiddleNode = (head: ListNode): ListNode => {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };

  const reverseList = (head: ListNode): ListNode => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  };

  let middleNode = findMiddleNode(head);
  let reversedNode = reverseList(middleNode.next);
  let p1 = head;
  let p2 = reversedNode;
  let result = true;
  while (p1 !== null && p2 !== null) {
    if (p1.val !== p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  reverseList(middleNode);
  return result;
}
