/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root) {
  const res = []
  const stack = []
  if (root === null) {
    return res
  }
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    const size = node.children.length
    for (let i = size; i >= 0; --i) {
      if (node.children[i]) {
        stack.push(node.children[i])
      }
    }
  }
  return res
}
