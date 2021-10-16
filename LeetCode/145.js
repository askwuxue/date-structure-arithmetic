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
const postorderTraversal = function (root) {
  const res = []
  const postOrder = root => {
    if (root === null) {
      return
    }
    postOrder(root.left)
    postOrder(root.right)
    res.push(root.val)
  }
  postOrder(root)
  return res
}
postorderTraversal()
