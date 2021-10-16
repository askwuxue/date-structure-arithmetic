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
  const dfs = root => {
    if (root === null) {
      return
    }
    for (let i = 0; i < root.children.length; ++i) {
      if (root.children[i]) {
        dfs(root.children[i])
      }
    }
    res.push(root.val)
  }
  dfs(root)
  return res
}
