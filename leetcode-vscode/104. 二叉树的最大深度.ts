/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// function maxDepth(root: TreeNode | null): number {
//     if (root === null) {
//         return 0
//     }
//     let queue: TreeNode[] = []
//     let deepLen = 0
//     queue.push(root)
//     while (queue.length) {
//         let size = queue.length
//         while (size > 0) {
//             let node = queue.shift()
//             if (node.left) {
//                 queue.push(node.left)
//             }
//             if (node.right) {
//                 queue.push(node.right)
//             }
//             --size
//         }
//         ++deepLen
//     }
//     return deepLen
// };
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(right, left) + 1
};
// @lc code=end

