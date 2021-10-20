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

function levelOrder(root: TreeNode | null): number[][] {
  const res = []
  if (root === null) {
    return res
  }
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length) {
    const len: number = queue.length
    const child: number[] = []
    for (let i = 0; i < len; ++i) {
      const node: TreeNode = queue.shift()
      if (res.length % 2) {
        child.unshift(node.val)
      } else {
        child.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(child)
  }
  return res
};