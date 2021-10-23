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

function isSymmetric(root: TreeNode | null): boolean {

  // 判断节点是否镜像对称
  const recur = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null || left.val !== right.val) {
      return false
    }
    return recur(left.left, right.right) && recur(left.right, right.left)
  }
  return root === null ? true : recur(root.left, root.right)
};