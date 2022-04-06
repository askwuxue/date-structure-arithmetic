/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (75.56%)
 * Likes:    1362
 * Dislikes: 0
 * Total Accepted:    765.9K
 * Total Submissions: 1M
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
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
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
// 中序遍历 左中右
// function inorderTraversal(root: TreeNode | null): number[] {
//   if (root === null) {
//     return [];
//   }
//   const res: number[] = [];
//   const inOrder = (root: TreeNode | null) => {
//     if (root === null) {
//       return;
//     }
//     inOrder(root.left);
//     res.push(root.val);
//     inOrder(root.right);
//     return res;
//   };
//   inOrder(root);
//   return res;
// }
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const res: number[] = [];
  const stack: TreeNode[] = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    res.push(node.val);
    root = node.right;
  }
  return res;
}
// @lc code=end
