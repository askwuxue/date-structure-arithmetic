/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (74.66%)
 * Likes:    268
 * Dislikes: 0
 * Total Accepted:    141.8K
 * Total Submissions: 186.5K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。
 *
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[1,3,5,6,2,4]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 节点总数在范围 [0, 10^4]内
 * 0 <= Node.val <= 10^4
 * n 叉树的高度小于或等于 1000
 *
 *
 *
 *
 * 进阶：递归法很简单，你可以使用迭代法完成此题吗?
 *
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// 递归
// function preorder(root: Node | null): number[] {
//   const res: number[] = [];
//   const dfs = (root: Node | null) => {
//     if (root === null) {
//       return;
//     }
//     res.push(root.val);
//     for (const child of root.children) {
//       dfs(child);
//     }
//   };
//   dfs(root);
//   return res;
// }

// 迭代
function preorder(root: Node | null): number[] {
  if (root === null) {
    return [];
  }
  const stack: Node[] = [];
  const res: number[] = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    let len = node.children.length;
    for (let i = len - 1; i >= 0; --i) {
      stack.push(node.children[i]);
    }
  }
  return res;
}
// @lc code=end
