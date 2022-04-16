/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 *
 * https://leetcode-cn.com/problems/design-circular-deque/description/
 *
 * algorithms
 * Medium (53.15%)
 * Likes:    113
 * Dislikes: 0
 * Total Accepted:    26.4K
 * Total Submissions: 49.9K
 * Testcase Example:  '["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"]\n' +
  '[[3],[1],[2],[3],[4],[],[],[],[4],[]]'
 *
 * 设计实现双端队列。
 * 
 * 实现 MyCircularDeque 类:
 * 
 * 
 * MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
 * boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
 * boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
 * boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
 * boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
 * int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
 * int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
 * boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
 * boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入
 * ["MyCircularDeque", "insertLast", "insertLast", "insertFront",
 * "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
 * [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * 输出
 * [null, true, true, true, false, 2, true, true, true, 4]
 * 
 * 解释
 * MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
 * circularDeque.insertLast(1);                    // 返回 true
 * circularDeque.insertLast(2);                    // 返回 true
 * circularDeque.insertFront(3);                    // 返回 true
 * circularDeque.insertFront(4);                    // 已经满了，返回 false
 * circularDeque.getRear();                  // 返回 2
 * circularDeque.isFull();                        // 返回 true
 * circularDeque.deleteLast();                    // 返回 true
 * circularDeque.insertFront(4);                    // 返回 true
 * circularDeque.getFront();                // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= k <= 1000
 * 0 <= value <= 1000
 * insertFront, insertLast, deleteFront, deleteLast, getFront, getRear,
 * isEmpty, isFull  调用次数不大于 2000 次
 * 
 * 
 */

// @lc code=start
class MyCircularDeque {
  queue: number[];
  capacity: number;
  constructor(k: number) {
    this.queue = [];
    this.capacity = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue.unshift(value);
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.queue.push(value);
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.shift();
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.queue.pop();
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[0];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.queue.length - 1];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.capacity;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end
