/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (56.73%)
 * Likes:    1846
 * Dislikes: 0
 * Total Accepted:    551.4K
 * Total Submissions: 960.1K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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

// function isSymmetric(root: TreeNode | null): boolean {
//   const check = (p1: TreeNode | null, p2: TreeNode | null): boolean => {
//     if (p1 === null && p2 === null) {
//       return true;
//     }
//     if (p1 === null || p2 === null) {
//       return false;
//     }
//     return (
//       p1.val === p2.val && check(p1.left, p2.right) && check(p1.right, p2.left)
//     );
//   };
//   return check(root, root);
// }

// 迭代，队列每次出队两个
function isSymmetric(root: TreeNode | null): boolean {
  const queue: TreeNode[] = [];
  queue.push(root);
  queue.push(root);
  while (queue.length !== 0) {
    let node1 = queue.pop();
    let node2 = queue.pop();
    if (node1 === null && node2 === null) {
      continue;
    }
    if (node1 === null || node2 === null || node1.val !== node2.val) {
      return false;
    }
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
}
// @lc code=end
