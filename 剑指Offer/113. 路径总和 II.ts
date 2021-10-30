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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = []
  const path: number[] = []
  const dfs = (root, targetSum, path):void => {
    if (root === null) {
      return
    }
    path.push(root.val)
    targetSum -= root.val
    if (root.left === null && root.right === null && targetSum === 0) {
      res.push([...path])
    }
    dfs(root.left, targetSum, path)
    dfs(root.right, targetSum, path)
    path.pop()
  }
  dfs(root, targetSum, path)
  return res
};