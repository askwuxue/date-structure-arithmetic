/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (72.69%)
 * Likes:    1108
 * Dislikes: 0
 * Total Accepted:    232.1K
 * Total Submissions: 318.8K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 *
 *
 * 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [0]
 * 输出：[0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中结点数在范围 [0, 2000] 内
 * -100
 *
 *
 *
 *
 * 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
// TODO 递归
// function flatten(root: TreeNode | null): void {
//   const preorder = (root: TreeNode | null, list: TreeNode[]): void => {
//     if (root === null) {
//       return;
//     }
//     list.push(root);
//     preorder(root.left, list);
//     preorder(root.right, list);
//   };
//   const list: TreeNode[] = [];
//   preorder(root, list);
//   const size = list.length;
//   for (let i = 1; i < size; ++i) {
//     let prev = list[i - 1],
//       curr = list[i];
//     prev.left = null;
//     prev.right = curr;
//   }
// }
// @lc code=end

// TODO 迭代
// function flatten(root: TreeNode | null): void {
//   const list: TreeNode[] = [];
//   const stack: TreeNode[] = [];
//   let node: TreeNode = root;

//   while (stack.length !== 0 || node !== null) {
//     while (node !== null) {
//       list.push(node);
//       stack.push(node);
//       node = node.left;
//     }
//     node = stack.pop();
//     node = node.right;
//   }
//   const size = list.length;
//   for (let i = 1; i < size; ++i) {
//     let prev = list[i - 1],
//       curr = list[i];
//     prev.left = null;
//     prev.right = curr;
//   }
// }

// TODO 最优解
function flatten(root: TreeNode | null): void {
  let curr: TreeNode = root;
  while (curr !== null) {
    if (curr.left !== null) {
      let next: TreeNode = curr.left;
      let prev: TreeNode = next;
      while (prev.right !== null) {
        prev = prev.right;
      }
      prev.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
}
