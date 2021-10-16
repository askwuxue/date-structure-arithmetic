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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  if (root === null) {
    return false
  }
  const check = (root, subRoot) => {
    if (root === null && subRoot == null) {
      return true
    }
    if (root === null || subRoot === null || root.val !== subRoot.val) {
      return false
    }
    return check(root.left, subRoot.left) && check(root.right, subRoot.right)
  }
  return check(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
isSubtree()
