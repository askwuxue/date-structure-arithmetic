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

 function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // if (A === null || B === null) {
  //   return false
  // }
  // 判断B是否为A节点为根节点树的子树，与父函数的A节点不一定是一个A
  const recur = (A: TreeNode | null, B: TreeNode | null): boolean => {
    if (B === null) {
      return true
    }
    if (A === null || A.val !== B.val) {
      return false
    }
    return recur(A.left, B.left) && recur(A.right, B.right)
  }

  // 从A树的根节点开始递归
  return (A !== null && B !== null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};