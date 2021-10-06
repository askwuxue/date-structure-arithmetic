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
  let flag = true
  while (queue.length) {
    // let size = queue.length
    const child = []
    for (let i = queue.length; i > 0; --i) {
      let node
      if (flag) {
        node = queue.shift()
      } else {
        node = queue.pop()
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      child.push(node.val)
    }
    res.push(child)
    flag = !flag
  }
  return res
};