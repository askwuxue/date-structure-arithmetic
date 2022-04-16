/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (76.35%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    103.8K
 * Total Submissions: 133.5K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。
 *
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[5,6,3,2,4,1]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 节点总数在范围 [0, 10^4] 内
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

// function postorder(root: Node | null): number[] {
//   if (root == null) {
//     return [];
//   }
//   const res: number[] = [];
//   const dfs = (root: Node | null) => {
//     if (root === null) {
//       return;
//     }
//     res.push(root.val);
//     for (let i = root.children.length - 1; i >= 0; --i) {
//       dfs(root.children[i]);
//     }
//   };
//   dfs(root);
//   return res.reverse();
// }

function postorder(root: Node | null): number[] {
  if (root == null) {
    return [];
  }
  const res: number[] = [];
  const stack: Node[] = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    for (const child of node.children) {
      stack.push(child);
    }
  }
  return res.reverse();
}
// @lc code=end
