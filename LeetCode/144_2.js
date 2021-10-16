/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  const res = []
  const stack = []
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      res.push(root.val)
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
    root = node.right
  }
  return res
}

preorderTraversal()
