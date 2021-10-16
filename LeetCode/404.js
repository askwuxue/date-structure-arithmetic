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
const sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }
    const isLeafNode = root => {
        return root.left === null && root.right === null
    }
    const queue = []
    queue.push(root)
    let res = 0
    while (queue.length) {
        const node = queue.shift()
        if (node.left) {
            if (isLeafNode(node.left)) {
                res += node.left.val
            } else {
                queue.push(node.left)
            }
        }
        if (node.right) {
            if (!isLeafNode(node.right)) {
                queue.push(node.right)
            }
        }
    }
    return res
};
