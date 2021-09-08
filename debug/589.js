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
  const dfs = root => {
    if (root === null) {
      return
    }
    res.push(root.val)
    for (let i = 0; i < root.children.length; ++i) {
      if (root.children[i] !== null) {
        dfs(root.children[i])
      }
    }
  }
  dfs(root)
  return res
}
