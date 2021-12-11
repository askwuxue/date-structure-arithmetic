/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return []
  }
  const queue: TreeNode[] = []
  const res: number[][] = []
  let isLeftToRight = true
  queue.push(root)
  while (queue.length) {
    let size = queue.length
    let levelList: number[] = []
    for (let i = 0; i < size; ++i) {
      let currNode = queue.shift()
      // 根据方向进行输入
      if (isLeftToRight) {
        levelList.push(currNode.val)
      } else {
        levelList.unshift(currNode.val)
      }
      // 子节点入队
      if (currNode.left !== null) {
        queue.push(currNode.left)
      }
      if (currNode.right !== null) {
        queue.push(currNode.right)
      }
    }
    isLeftToRight = !isLeftToRight
    res.push(levelList)
  }
return res
};
// @lc code=end

