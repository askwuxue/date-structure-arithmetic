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
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let res = 1
  const height = (root) => {
    if (root === null) {
      return 0
    }
    // 左儿子为根的树的深度
    const left = height(root.left)
    // 右儿子为根的数的深度
    const right = height(root.right)
    res = Math.max(res, left + right + 1)
    // 返回该节点为根的数的深度
    return Math.max(left, right) + 1
  }
  height(root)
  return res - 1
}
diameterOfBinaryTree()
