/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
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

 function levelOrder(root: Node | null): number[][] {
	if (root === null) {
        return []
    }
    let queue = []
    let res = []
    queue.push(root)
    while (queue.length) {
        let size = queue.length
        let level = []
        while (size > 0) {
            let node = queue.shift()
            level.push(node.val)
            if (node.children) {
                queue = [...queue, ...node.children]
            }
            --size
        }
        res.push(level)
    }
    return res
};
// @lc code=end

