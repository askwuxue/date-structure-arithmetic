/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function (root) {
  const res = []
  const stack = []
  if (root === null) {
    return res
  }
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    for (let i = 0; i < node.children.length; ++i) {
      if (node.children[i] !== null) {
        stack.push(node.children[i])
      }
    }
  }
  return res.reverse()
}
