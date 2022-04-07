/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let maxRes = Number.MIN_SAFE_INTEGER;
  const maxSum = (root: TreeNode | null): number => {
    // 空节点贡献为0
    if (root === null) {
      return 0;
    }
    // 子树的贡献值
    let leftMax = Math.max(maxSum(root.left), 0);
    let rightMax = Math.max(maxSum(root.right), 0);

    // 当前节点的路径和
    let currSum = root.val + leftMax + rightMax;

    // 更新最大路径和
    maxRes = Math.max(maxRes, currSum);

    // 返回当前节点为根节点的最大路径和
    return root.val + Math.max(leftMax, rightMax);
  };
  maxSum(root);
  return maxRes;
}
// @lc code=end
