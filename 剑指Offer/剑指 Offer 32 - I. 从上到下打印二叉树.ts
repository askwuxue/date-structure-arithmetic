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

function levelOrder(root: TreeNode | null): number[] {
  const res: number[] = []
  if (root === null) {
    return res
  }
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length) {
    const root: TreeNode = queue.shift()
    res.push(root.val)
    if (root.left) {
      queue.push(root.left)
    }
    if (root.right) {
      queue.push(root.right)
    }
  }
  return res
};