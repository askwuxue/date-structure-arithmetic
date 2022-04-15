/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
 *
 * https://leetcode-cn.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (47.40%)
 * Likes:    695
 * Dislikes: 0
 * Total Accepted:    116.1K
 * Total Submissions: 244.6K
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 *
 *
 * 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true
 * ；否则，返回 false 。
 *
 * 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,4,5,1,2], subRoot = [4,1,2]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * root 树上的节点数量范围是 [1, 2000]
 * subRoot 树上的节点数量范围是 [1, 1000]
 * -10^4
 * -10^4
 *
 *
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const check = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null && subRoot === null) {
      return true;
    }
    if (root === null || subRoot === null || root.val !== subRoot.val) {
      return false;
    }
    return check(root.left, subRoot.left) && check(root.right, subRoot.right);
  };
  const dfs = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (root === null) {
      return false;
    }
    return (
      check(root, subRoot) ||
      dfs(root.left, subRoot) ||
      dfs(root.right, subRoot)
    );
  };
  return dfs(root, subRoot);
}
// @lc code=end
