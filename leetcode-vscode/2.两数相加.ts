/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 * 创建两个节点，分别为head和tail值为null，head指向头节点，tail作为动态节点不断移动
 * 初始化进位值carry为0
 * 循环遍历两个链表，跳出循环条件为l1和l2同时为null
 * 循环开始取l1 val 和 l2 val ，如果为null，取值为0
 * 判断头节点是否为null，如果为null，同时初始化head和tail
 * 否则 更新tail的next节点为新节点，新节点的值为 (l1.val + l2.val + curry) % 10
 * 更新进位值carry为 (l1.val + l2.val + carry)
 * 循环结束，判断进位值carry的值，如果大于0，则最后创建一个尾结点
 * 返回head节点
 */

// @lc code=start
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let head = null
  let tail = null
  let carry = 0
  while (l1 || l2) {
    let value1 = l1 !== null ? l1.val : 0
    let value2 = l2 !== null ? l2.val : 0
    let sum = value1 + value2 + carry
    if (head === null) {
      head = tail = new ListNode(sum % 10)
    } else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    carry = Math.floor(sum / 10)
    if (l1 !== null) {
      l1 = l1.next
    }
    if (l2 !== null) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
};
// @lc code=end

