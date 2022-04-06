/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (57.55%)
 * Likes:    1261
 * Dislikes: 0
 * Total Accepted:    361.8K
 * Total Submissions: 623.9K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 实现 MinStack 类:
 * 
 * 
 * MinStack() 初始化堆栈对象。
 * void push(int val) 将元素val推入堆栈。
 * void pop() 删除堆栈顶部的元素。
 * int top() 获取堆栈顶部的元素。
 * int getMin() 获取堆栈中的最小元素。
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * 输出：
 * [null,null,null,null,-3,null,0,-2]
 * 
 * 解释：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * pop、top 和 getMin 操作总是在 非空栈 上调用
 * push, pop, top, and getMin最多被调用 3 * 10^4 次
 * 
 * 
 */

// @lc code=start
class MinStack {
  private stack: number[];
  private minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      let minVal: number =
        this.minStack[this.minStack.length - 1] > val
          ? val
          : this.minStack[this.minStack.length - 1];
      this.minStack.push(minVal);
    }
  }

  pop(): void {
    if (!this.isEmpty()) {
      this.stack.pop();
      this.minStack.pop();
    }
    return;
  }

  top(): number {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
    return -1;
  }

  getMin(): number {
    if (!this.isEmpty()) {
      return this.minStack[this.minStack.length - 1];
    }
    return -1;
  }

  isEmpty(): boolean {
    if (this.stack.length === 0 && this.minStack.length === 0) {
      return true;
    }
    return false;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
