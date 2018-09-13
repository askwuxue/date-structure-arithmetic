/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    const res = [];
    let previousNode = head;
    while (previousNode != null) {
        res.push(previousNode.val);
        previousNode = previousNode.next;
    }
    return res[res.length - 2];
}
console.log(FindKthToTail())

// 目前无法打印
