/* function ListNode (x) {
    this.val = x;
    this.next = null;
} */

function printListFromTailToHead (head) {
    let res = [];
    let previousNode = head;
    while (previousNode != null) {
        res.unshift(previousNode.val);
        previousNode = previousNode.next;
    }
    return res;
}