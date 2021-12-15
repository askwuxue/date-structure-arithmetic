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
  if (A === null || B === null) {
    return false
  }
  const dfs = (A: TreeNode | null, B: TreeNode | null): boolean => {
    if (B === null) {
      return true
    }
    if (A === null || A.val !== B.val) {
      return false
    }
    return dfs(A.left, B.left) && dfs(A.right, B.right)
  }
  return (A !== null && B !== null) && (dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};