/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true
    }
    const maxDeep = (root) => {
        if (root === null) {
            return 0
        }
        return Math.max(maxDeep(root.left), maxDeep(root.right)) + 1
    }
    return (Math.abs(maxDeep(root.left) - maxDeep(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end

