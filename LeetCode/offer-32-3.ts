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
  const queue = [root]
  while (queue.length) {
    // let size = queue.length
    const child = []
    for (let i = queue.length; i > 0; --i) {
      // let size = queue.length
      let node = queue.shift()
      // 奇数层
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