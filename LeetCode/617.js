/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 合并二叉树 对于不为空的节点 节点值相加
const mergeTrees = function (root1, root2) {
  if (root1 == null) {
    return root2
  }
  if (root2 === null) {
    return root1
  }
  const queue1 = []
  const queue2 = []
  queue1.push(root1)
  queue2.push(root2)
  while (queue1.length && queue2.length) {
    let node1 = queue1.shift()
    let node2 = queue2.shift()
    node1.val += node2.val
    if (node1.left !== null && node2.left !== null) {
      queue1.push(node1.left)
      queue2.push(node2.left)
    }
    if (node1.left === null) {
      node1.left = node2.left
    }

    if (node1.right !== null && node2.right !== null) {
      queue1.push(node1.right)
      queue2.push(node2.right)
    }
    if (node1.right === null) {
      node1.right = node2.right
    }
  }
  return root1
}
