/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (56.22%)
 * Likes:    1775
 * Dislikes: 0
 * Total Accepted:    403.3K
 * Total Submissions: 713.2K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
 *
 *
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const mergeTwoList = (list1: ListNode | null, list2: ListNode | null) => {
    if (list1 === null || list2 === null) {
      return list1 === null ? list2 : list1;
    }
    let newHead = new ListNode(-1);
    let temp = newHead;
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        temp.next = list1;
        list1 = list1.next;
      } else {
        temp.next = list2;
        list2 = list2.next;
      }
      temp = temp.next;
    }
    temp.next = list1 === null ? list2 : list1;
    return newHead.next;
  };

  const merge = (
    lists: Array<ListNode | null>,
    left: number,
    right: number
  ): ListNode | null => {
    if (left === right) {
      return lists[left];
    }
    if (left > right) {
      return null;
    }
    let mid = left + ~~((right - left) / 2);
    return mergeTwoList(merge(lists, left, mid), merge(lists, mid + 1, right));
  };
  return merge(lists, 0, lists.length - 1);
}
// @lc code=end
