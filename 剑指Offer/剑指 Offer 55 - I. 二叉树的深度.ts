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
//   let getHeight = function(root: TreeNode | null): number {
//     if (root === null) return 0;
//     let leftMax = getHeight(root.left);
//     let rightMax = getHeight(root.right);
//     return Math.max(leftMax, rightMax) + 1
//   }
//   return getHeight(root)
// };

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);
  return Math.max(leftMax, rightMax) + 1;
};