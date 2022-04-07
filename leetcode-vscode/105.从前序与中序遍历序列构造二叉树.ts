/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.64%)
 * Likes:    1522
 * Dislikes: 0
 * Total Accepted:    333.3K
 * Total Submissions: 469.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
 *
 *
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  const len = inorder.length;
  for (let i = 0; i < len; ++i) {
    map.set(inorder[i], i);
  }

  const dfs = (
    preorder: number[],
    inorder: number[],
    preorderLeft: number,
    preorderRight: number,
    inorderLeft: number,
    inorderRight: number
  ): TreeNode | null => {
    if (preorderLeft > preorderRight) {
      return null;
    }
    // preorder中根节点的位置
    let preorderRoot = preorderLeft;
    // 在inorder中定位根节点的位置
    let inorderRoot = map.get(preorder[preorderRoot]);
    // 左子树中的节点数目
    let sizeLeftSubTree = inorderRoot - inorderLeft;
    // 构建根节点
    let root = new TreeNode(preorder[preorderRoot]);
    // 递归为根节点添加左节点
    root.left = dfs(
      preorder,
      inorder,
      preorderLeft + 1,
      preorderLeft + sizeLeftSubTree,
      inorderLeft,
      inorderRoot - 1
    );
    // 递归的为根节点添加右节点
    root.right = dfs(
      preorder,
      inorder,
      preorderLeft + sizeLeftSubTree + 1,
      preorderRight,
      inorderRoot + 1,
      inorderRight
    );
    return root;
  };

  return dfs(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
}
// @lc code=end
