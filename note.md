# 数据结构和算法

## 如何高效，有效的算法

《异类 不一样的启示录》

1. 切碎知识点
2. 刻意练习 不爽
3. 反馈 主动反馈（自己去进行的） 被动反馈（被别人反馈）

_每学完一个知识点就去 LeetCode 刷对应的题目_

**最好的方式是什么？**
**时间复杂度是多少？空间复杂是多少**
**寻求大佬的反馈**

### 切题四件套

1. 和面试官讨论
2. 想最优解
3. code
4. test cases

## 数据结构

### 栈

1. 访问：时间复杂度 O(1)
2. 删除，插入，最差时间复杂度为 O(n)

#### `leetCode`

##### [20.有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度简单 2352

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```

**示例 4：**

```
输入：s = "([)]"
输出：false
```

**示例 5：**

```
输入：s = "{[]}"
输出：true
```

**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成

**思路**

 利用栈的先进先出的特性，先考虑边界条件，栈内元素为奇数个，直接退出。遇到左括号，入栈。遇到右括号，出栈。出栈的元素和右括号进行匹配。匹配失败则退出。

**code**

```ts
/**
 * @param {string} s
 * @return {boolean}
 */
//  TODO 运行时间过长
var isValid = function (s) {
  let arr = [];
  let len = s.length;
  if (len % 2) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      switch (arr.pop()) {
        case "(": {
          if (s[i] !== ")") {
            return false;
          }
          break;
        }
        case "[": {
          if (s[i] !== "]") {
            return false;
          }
          break;
        }
        case "{": {
          if (s[i] !== "}") {
            return false;
          }
          break;
        }
        default: {
          return false;
        }
      }
    }
  }
  return arr.length === 0;
};
```

##### [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

难度简单 885

设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

- `push(x)` —— 将元素 x 推入栈中。
- `pop()` —— 删除栈顶的元素。
- `top()` —— 获取栈顶元素。
- `getMin()` —— 检索栈中的最小元素。

**示例:**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

**提示：**

- `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用。

**思路**

 首先栈的功能全部要实现，在普通栈的基础上，访问最小元素的时间复杂度是 O(n)。所以要其他的方式来访问栈内最小元素。一般来说，用空间换取时间是一种方式。借助最小栈（`minStack`）来实现，最小栈内始终在栈顶放置最小值。使普通栈（`stack`）和最小栈保持同步。最小栈为空，普通栈`push`，也`push`到最小栈。如果普通栈`push`的值小于最小栈的栈顶值，也`push`到最小栈。如果普通栈`push`的值大于最小栈栈顶值，不`push`到最小栈。

**code**

```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popNumber = this.stack.pop();
  if (popNumber === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
```

### 队列

1. 先进先出
2. 有顺序的数据结构
3. 线性队列和环形队列，线性队列空间无法进行复用。出队列只是移动了指针，实际数组的空间还是占有的，导致了数组空间的浪费

#### 线性队列的实现

主要思想是头指针和尾指针默认的位置都是-1, 当两个指针重合，队列空。当尾指针走到了队列的最后一个元素位置，队列满

```java
class Queue {

    private int maxSize;
    private int head;
    private int end;
    private int[] arr;

    // 构造函数初始化队列
    public Queue(int ArrmaxSize) {
        maxSize = ArrmaxSize;
        arr = new int[maxSize];
        head = -1;
        end = -1;
    }

    // 判断链表是否满 尾指针等于指向了数组的最后一个元素 队列已满
    public boolean isFull() {
        return end == arr.length - 1;
    }

    // 判断链表是否为空 当头指针等于尾指针 队列已满
    public boolean isEmpty() {
        return end == head;
    }

    // 出队
    public int popQueue() {
        if (isEmpty()) {
            throw new RuntimeException("queue is empty");
        }
        // 头部指针后移
        head++;
        return arr[head];
    }

    // 入队
    public void addQueue(int n) {
        if (isFull()) {
            throw new RuntimeException("queue is full");
        }

        // 尾指针后移
        end++;
        arr[end] = n;
    }

}
```

#### 环形队列的实现

环形队列实现的主要思想是，将默认的头指针(front)和尾指针(rear)都初始为 0。rear 总是指向最后一个元素的后一个位置(该位置是预留的一个约定空间)。
因此，如果队列的 maxSize 为 5，则最大有效数据个数为 4.因此，队列空的条件是：(rear + 1) % maxSize == front; 队列满：rear == front
队列的有效数据个数为: (rear - front + maxSize) % maxSize。

```java
class CircleQueue {
    private int maxSize;
    private int head;
    private int end;
    private int[] arr;

    // 构造函数初始化队列
    public CircleQueue(int ArrmaxSize) {
        maxSize = ArrmaxSize;
        arr = new int[maxSize];

        // 环形队列的默认头指针和尾指针都为0
        head = 0;
        end = 0;
    }

    // 判断链表是否满
    public boolean isFull() {
        // return end == arr.length - 1;
        // 始终留一个空的位置做约定 所以maxSize 为3 时 队列长度为2时， 就认为队列已满
        return (end + 1) % maxSize == head;
    }

    // 判断链表是否为空 当头指针等于尾指针 队列已满
    public boolean isEmpty() {
        return end == head;
    }

    // 出队
    public int popQueue() {
        if (isEmpty()) {
            throw new RuntimeException("queue is empty");
        }

        // 当前的指针指向的是当前的出队元素 因为指针下一步会变 所以此时先暂存当前的队列头数据
        int value;
        value = arr[head];

        head = (head + 1) % maxSize;
        return value;
    }

    // 入队
    public void addQueue(int n) {
        if (isFull()) {
            throw new RuntimeException("queue is full");
        }

        arr[end] = n;
        end = (end + 1) % maxSize;
    }

    // 显示队列
    public void show() {
        for (int i = head; i < head + size(); i++) {
            System.out.println(arr[i]);
        }
    }

    // 获取队列的有效长度
    public int size() {
        return (end + maxSize - head) % maxSize;
    }


}
```

#### `leetCode`

##### [933. 最近的请求次数](https://leetcode-cn.com/problems/number-of-recent-calls/)

难度简单 83

写一个 `RecentCounter` 类来计算特定时间范围内最近的请求。

请你实现 `RecentCounter` 类：

- `RecentCounter()` 初始化计数器，请求数为 0 。
- `int ping(int t)` 在时间 `t` 添加一个新请求，其中 `t` 表示以毫秒为单位的某个时间，并返回过去 `3000` 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 `[t-3000, t]` 内发生的请求数。

**保证** 每次对 `ping` 的调用都使用比之前更大的 `t` 值。

**示例：**

```
输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
```

**提示：**

- `1 <= t <= 109`
- 保证每次对 `ping` 调用所使用的 `t` 值都 **严格递增**
- 至多调用 `ping` 方法 `104` 次

**思路**

利用队列。先将当前的时间放进队列内，然后从队列头依次判断对应的队列元素是否出队。
出队条件，队列中的元素 < (当前 t - 3000)

**code**

```JavaScript
var RecentCounter = function() {
    this.arr = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    while (this.arr[0] < t - 3000) {
        this.arr.shift();
    }
    return this.arr.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

### 链表

1. 改善数组的删除和插入操作
2. 查找：时间复杂为 O(n)
3. 删除和插入的时间复杂度 O(1)

#### `LeetCode`

##### [剑指 Offer 22. 链表中倒数第 k 个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

难度简单 182

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 `6` 个节点，从头节点开始，它们的值依次是 `1、2、3、4、5、6`。这个链表的倒数第 `3` 个节点是值为 `4` 的节点。

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

**code**

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 第一个元素
    var cur = head;
    // 链表长度
    var l = 0;
    while (cur !== null) {
        l++;
        cur = cur.next;
    }

    // k, l合法检验
    if (k < 1 || k > l || l === 0) {
        return null;
    }

    // lastIndex
    var lastIndex = head;
    for (var i = 0; i < l - k; i++) {
        lastIndex = lastIndex.next;
    }
    return lastIndex;
};
```

##### [剑指 Offer 06. 从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

难度简单 139

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

**限制：**

```
0 <= 链表长度 <= 10000
```

**思路**

1. 使用 JavaScript 数组的 unshift(),将链表元素依次数组头部加入。时间复杂度使用 O(n)
2. 使用递归，将函数依次入栈，从最后一个元素依次 push 到数组中

**code**

1. JavaScript 数组方法

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
//  已注释代码是先实现链表反转再加入数组中
var reversePrint = function (head) {
  if (head === null) return [];
  // let pre = null;
  // let temp = null;
  let cur = head;
  let num = [];
  while (cur !== null) {
    // temp = cur.next;
    // cur.next = pre;
    // pre = cur;
    // cur = temp;
    // TODO 使用unshift()的时间复杂度时多少，和push()比呢？
    num.unshift(cur.val);
    cur = cur.next;
  }
  return num;
};
```

2. 递归

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// TODO 使用递归实现，时间复杂度是多少
var reversePrint = function (head) {
  if (head === null) return [];
  let num = [];
  const vistor = function (head) {
    if (head !== null) {
      vistor(head.next);
      num.push(head.val);
    }
  };
  vistor(head);
  return num;
};
```

##### [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

难度简单 567

存在一个按升序排列的链表，给你这个链表的头节点 `head` ，请你删除所有重复的元素，使每个元素 **只出现一次** 。

返回同样按升序排列的结果链表。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```
输入：head = [1,1,2]
输出：[1,2]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

**提示：**

- 链表中节点数目在范围 `[0, 300]` 内
- `-100 <= Node.val <= 100`
- 题目数据保证链表已经按升序排列

**code**

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;
  let cur = head;
  while (cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
};
```

### 树

#### `leetCode`

##### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

难度简单 862

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**示例：**
给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

**思路**

可以使用深度优先(DFS)遍历,树的高度等于`max(root.left, root.right) + 1`，根据这个规律可以使用递归，遍历所有节点之后，可以得到树的最大深度。

时间复杂度为 O(n)

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

##### [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

难度简单 674

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过 1 。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：true
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

```
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

**示例 3：**

```
输入：root = []
输出：true
```

**提示：**

- 树中的节点数在范围 `[0, 5000]` 内
- `-104 <= Node.val <= 104`

**思路**：

1. 自顶向下的方式递归，如果左子树平衡，右子树平衡，它们的高度差小于等于 1。以当前节点为根节点的树平衡。

2. 自底向上的方式，判断左子树和右子树是否平衡。如果左子树和右子树的高度差的绝对值小于等于 1，则认为平衡。

   返回最大子树高度。高度差绝对值大于 1，则认为不平衡。返回-1.只要其中一棵子树返回-1。则认为整棵树不平衡。

**code**

1.

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  if (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(height(root.left) - height(root.right)) <= 1
  ) {
    return true;
  } else {
    return false;
  }
};

let height = function (root) {
  if (root === null) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
};
```

2.  ```js
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    var isBalanced = function (root) {
      return getDeep(root) !== -1;
    };
    
    let getDeep = function (root) {
      if (root === null) return 0;
      let left = getDeep(root.left);
      let right = getDeep(root.right);
      if (Math.abs(left - right) > 1 || left === -1 || right === -1) {
        return -1;
      }
      return Math.max(left, right) + 1;
    };
    ```

##### [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

难度简单 692

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

**示例 :**
给定二叉树

```
          1
         / \
        2   3
       / \
      4   5
```

返回 **3**, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

**注意：**两结点之间的路径长度是以它们之间边的数目表示。

**思路**

 经过观察，直径的长度为，以该节点出发，经过的左子树节点和右子树节点的和减去 1。首先，递归求左子树的高度和右子树的高度。然后不断的更新直径的长度：maxLen = L + R + 1。最终直径的长度为 maxLen - 1。

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// maxLen 不能再全局设定值，因为LeetCode每一次会保留全局的值，所以会导致maxLen可能会是上一轮计算的值。
let maxLen;
let depth = function (root) {
  if (root === null) return 0;
  let left = depth(root.left);
  let right = depth(root.right);
  // 更新最大长度。
  maxLen = Math.max(maxLen, left + right + 1);
  // 更新子树的最大高度
  return Math.max(left, right) + 1;
};

var diameterOfBinaryTree = function (root) {
  maxLen = 1;
  depth(root);
  return maxLen - 1;
};
```

##### [617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

难度简单

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则**不为** NULL 的节点将直接作为新二叉树的节点。

**示例 1:**

```
输入:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
输出:
合并后的树:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
```

**注意:** 合并必须从两个树的根节点开始。

**思路**

 深度优先，如果其中一个树为 null，直接返回另一个树。左子树，右子树进行递归。然后结果合并到当前节点上。

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 通过递归合并，先合并当前节点，然后合并左子树和右子树
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  let newRoot = new TreeNode(root1.val + root2.val);
  newRoot.left = mergeTrees(root1.left, root2.left);
  newRoot.right = mergeTrees(root1.right, root2.right);
  return newRoot;
};
```

##### [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

难度简单

**示例：**

输入：

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**备注:**
这个问题是受到 [Max Howell ](https://twitter.com/mxcl)的 [原问题](https://twitter.com/mxcl/status/608682016205344768) 启发的 ：

> 谷歌：我们 90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

**思路**

递归，交换左右子树或者左右节点。

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root === null) return null;
  let L = invertTree(root.left);
  let R = invertTree(root.right);
  root.left = R;
  root.right = L;
  // return root;
  return root;
};
```

##### [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

难度简单

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` ，判断该树中是否存在 **根节点到叶子节点** 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。

**叶子节点** 是指没有子节点的节点。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：false
```

**示例 3：**

```
输入：root = [1,2], targetSum = 0
输出：false
```

**提示：**

- 树中节点的数目在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

**思路**

    1. 广度优先，使用两个队列，将节点以及节点值分别放入两个队列。出队时，记录当前出队的值，以及左右节点。将出队的左右节点，以及左右节点和出队节点的值相加后放入队列。可以保证当前的入队的节点的值是确定的。不断的出队入队至队列为空。
    2. 递归实现。从根节点到叶子节点的和为sum,那么当前节点到叶子节点的和为`sum-val`。如果当前节点是叶子节点。那么`val === sum`。

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  let queNode = [root];
  let queVal = [root.val];
  let sum = 0;

  while (queNode.length !== 0) {
    let temp = queNode.shift();
    let curVal = queVal.shift();
    if (temp.left === null && temp.right === null) {
      if (curVal === targetSum) {
        return true;
      }
      // 到这里其实还没有遍历结束.队列不一定为空
      continue;
      // return false;
    }
    if (temp.left !== null) {
      queNode.push(temp.left);
      queVal.push(curVal + temp.left.val);
    }
    if (temp.right !== null) {
      queNode.push(temp.right);
      queVal.push(curVal + temp.right.val);
    }
  }
  return false;
};
```

**code**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
```

**code**

1.

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) return null;
  let left = mirrorTree(root.left);
  let right = mirrorTree(root.right);
  let tmp = left;
  root.left = right;
  root.right = tmp;
  return root;
};
```

2.

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) return null;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  return root;
};
```

## 第一周刷题 数组，链表

#### [485. 最大连续 1 的个数](https://leetcode-cn.com/problems/max-consecutive-ones/)

难度简单

给定一个二进制数组， 计算其中最大连续 1 的个数。

**示例：**

```
输入：[1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```

**提示：**

- 输入的数组只包含 `0` 和 `1` 。
- 输入数组的长度是正整数，且不超过 10,000。

通过次数 106,321

提交次数 176,785

##### 思路

 题目比较简单，遍历一次数组，遇到 1，计数一次。遇到零计数归零。更新 1 个数的最大值。

##### code

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let len = nums.length;
  let max = 0;
  let k = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      k++;
      max = Math.max(max, k);
      continue;
    }
    k = 0;
  }
  return max;
};
```

#### [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

难度简单 1060 收藏分享切换为英文接收动态反馈

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**示例:**

```
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明**:

1. 必须在原数组上操作，不能拷贝额外的数组。
2. 尽量减少操作次数。

通过次数 369,449

提交次数 579,501

##### 思路

 利用双指针，左指针指向已经排好序的末尾，右指针指向待排的头部。当右指针对应的数不为 0，则交换左右指针指针对应的数。左指针的左边全部是非 0 数，左指针的右边到右指针的左边区间内全部是 0。时间复杂度为 O（n）。空间复杂度为 O（1）

##### code

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;
  let len = nums.length;
  while (right < len) {
    if (nums[right]) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
    }
    right++;
  }
};
```

#### [645. 错误的集合](https://leetcode-cn.com/problems/set-mismatch/)

难度简单

集合 `s` 包含从 `1` 到 `n` 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 **丢失了一个数字** 并且 **有一个数字重复** 。

给定一个数组 `nums` 代表了集合 `S` 发生错误后的结果。

请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

**示例 1：**

```
输入：nums = [1,2,2,4]
输出：[2,3]
```

**示例 2：**

```
输入：nums = [1,1]
输出：[1,2]
```

**提示：**

- `2 <= nums.length <= 104`
- `1 <= nums[i] <= 104`

##### 思路

    1. 排序后，遍历。找重复的数和缺失的数。需要注意的是边界条件。当缺失的数是1，或者是n的时候。需要特别注意。时间复杂度`O（nlog(n)）`
    2. 使用Map。遍历，找出重复的和缺失的。时间复杂度O（n）。空间复杂度为O（n）

##### code

1.

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((v1, v2) => v1 - v2);
  let len = nums.length;
  let rep = 0;
  let miss = 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      rep = nums[i];
    }
    if (nums[i + 1] - nums[i] > 1) {
      miss = nums[i] + 1;
    }
  }
  let res = [rep, len !== nums[len - 1] ? len : miss];
  return res;
};
```

2.

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let len = nums.length;
  let map = new Map();
  let rep;
  let miss;
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
      rep = nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let i = 1; i <= len; i++) {
    if (!map.has(i)) {
      miss = i;
      break;
    }
  }
  let res = [rep, miss];
  return res;
};
```

#### [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

难度中等 2458 收藏分享切换为英文接收动态反馈

给你 `n` 个非负整数 ` a1，a2，...，a``n `，每个数代表坐标中的一个点 `(i, ai)` 。在坐标内画 `n` 条垂直线，垂直线 `i` 的两个端点分别为 `(i, ai)` 和 `(i, 0)` 。找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

**说明：**你不能倾斜容器。

**示例 1：**

![img](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
```

**示例 2：**

```
输入：height = [1,1]
输出：1
```

**示例 3：**

```
输入：height = [4,3,2,1,4]
输出：16
```

**示例 4：**

```
输入：height = [1,2,1]
输出：2
```

**提示：**

- `n = height.length`
- `2 <= n <= 3 * 104`
- `0 <= height[i] <= 3 * 104`

##### code

1. 

   ```js
   /**
    * @param {number[]} height
    * @return {number}
    */
   var maxArea = function (height) {
     let left = 0;
     let right = height.length - 1;
     let maxArea = (right - left) * Math.min(height[right], height[left]);
     while (left < right) {
       if (height[left] < height[right]) {
         left++;
       } else {
         right--;
       }
       let temp = (right - left) * Math.min(height[right], height[left]);
       maxArea = Math.max(maxArea, temp);
     }
     return maxArea;
   };
   ```

#### [15. 三数之和](https://leetcode-cn.com/problems/3sum/)

难度中等

给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 *a，b，c ，*使得 _a + b + c =_ 0 ？请你找出所有和为 `0` 且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。

**示例 1：**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

**示例 2：**

```
输入：nums = []
输出：[]
```

**示例 3：**

```
输入：nums = [0]
输出：[]
```

**提示：**

- `0 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

##### code

1.  先排序，固定一个数，剩下的两个数按照两数之和的解法求解。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 * [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]
 * [-1,0,1,2,-1,-4]
 * [-4, -1, -1, 0, 1, 2]
 * [[-1,-1,2],[-1,0,1]]
 *
 */
var threeSum = function (nums) {
  let len = nums.length;
  if (nums === null || len < 3) return [];
  nums.sort((v1, v2) => v1 - v2);
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    let last = len - 1;
    let target = -nums[i];
    for (let first = i + 1; first < len - 1; first++) {
      if (first > i + 1 && nums[first - 1] === nums[first]) {
        continue;
      }
      while (first < last && nums[first] + nums[last] > target) {
        last--;
      }
      if (last === first) {
        break;
      }
      if (nums[first] + nums[last] === target) {
        let arr = [-target, nums[first], nums[last]];
        res.push(arr);
      }
    }
  }
  return res;
};
```

#### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

难度简单 

假设你正在爬楼梯。需要 _n_ 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 _n_ 是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

##### code

1. 

   ```js
   /**
    * @param {number} n
    * @return {number}
    */
   var climbStairs = function (n) {
     let [p, q, r] = [0, 0, 1];
     for (let i = 1; i <= n; i++) {
       p = q;
       q = r;
       r = p + q;
     }
     return r;
   };
   ```

#### [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

难度简单 1704

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3：**

```
输入：head = []
输出：[]
```

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

##### code

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let pre = null;
  let curr = head;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
};
```

#### [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

难度中等 916 收藏分享切换为英文接收动态反馈

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2：**

```
输入：head = []
输出：[]
```

**示例 3：**

```
输入：head = [1]
输出：[1]
```

**提示：**

- 链表中节点的数目在范围 `[0, 100]` 内
- `0 <= Node.val <= 100`

**进阶：**你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）

##### code

1. 迭代

   ```js
   /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */
   /**
    * @param {ListNode} head
    * @return {ListNode}
    */
   var swapPairs = function (head) {
     let dummyHead = new ListNode(0);
     dummyHead.next = head;
     let temp = dummyHead;
     while (temp.next !== null && temp.next.next) {
       let node1 = temp.next;
       let node2 = temp.next.next;
       temp.next = node2;
       node1.next = node2.next;
       node2.next = node1;
       temp = node1;
     }
     return dummyHead.next;
   };
   ```

2. 递归

   ```js
   /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */
   /**
    * @param {ListNode} head
    * @return {ListNode}
    */
   var swapPairs = function (head) {
     if (head === null || head.next === null) return head;
     let newHead = head.next;
     head.next = swapPairs(newHead.next);
     newHead.next = head;
     return newHead;
   };
   ```

#### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

难度简单 1064 收藏分享切换为英文接收动态反馈

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true` 。 否则，返回 `false` 。

**进阶：**

你能用 _O(1)_（即，常量）内存解决此问题吗？

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**提示：**

- 链表中节点的数目范围是 `[0, 104]`
- `-105 <= Node.val <= 105`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

##### code

1. Set

   ```js
   /**
    * Definition for singly-linked list.
    * function ListNode(val) {
    *     this.val = val;
    *     this.next = null;
    * }
    */

   /**
    * @param {ListNode} head
    * @return {boolean}
    */
   var hasCycle = function (head) {
     let set = new Set();
     while (head !== null) {
       if (set.has(head)) {
         return true;
       }
       set.add(head);
       head = head.next;
     }
     return false;
   };
   ```

2. 快慢指针法

141

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // if (head === null && head.next === null) return false;
  // let temp = head;
  let set = new Set();
  while (head !== null) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
};
```

#### [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

难度简单 1707 收藏分享切换为英文接收动态反馈

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

**示例 2：**

```
输入：l1 = [], l2 = []
输出：[]
```

**示例 3：**

```
输入：l1 = [], l2 = [0]
输出：[0]
```

**提示：**

- 两个链表的节点数目范围是 `[0, 50]`
- `-100 <= Node.val <= 100`
- `l1` 和 `l2` 均按 **非递减顺序** 排列

##### code

1. 递归

```js
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let newHead = new ListNode(0);
  while (l1 !== null || l2 !== null) {
    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
};
```

2. 迭代

```js
var mergeTwoLists = function (l1, l2) {
  let newHead = new ListNode(0);
  let cur = newHead;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 === null ? l2 : l1;
  return newHead.next;
};
```

#### [88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

难度简单

给你两个有序整数数组 `nums1` 和 `nums2`，请你将 `nums2` 合并到 `nums1` 中*，*使 `nums1` 成为一个有序数组。

初始化 `nums1` 和 `nums2` 的元素数量分别为 `m` 和 `n` 。你可以假设 `nums1` 的空间大小等于 `m + n`，这样它就有足够的空间保存来自 `nums2` 的元素。

**示例 1：**

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
```

**示例 2：**

```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
```

**提示：**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-109 <= nums1[i], nums2[i] <= 109`

##### code

1. 使用排序

   ```js
   var merge = function (nums1, m, nums2, n) {
     nums1.splice(m, nums1.length, ...nums2);
     nums1.sort((v1, v2) => v1 - v2);
   };
   ```

2. 双指针。

   ```js
   var merge = function (nums1, m, nums2, n) {
     let p1 = 0;
     let p2 = 0;
     let cur;
     let newArr = new Array(m + n).fill(0);
     while (p1 < m || p2 < n) {
       if (p1 === m) {
         cur = nums2[p2++];
       } else if (p2 === n) {
         cur = nums1[p1++];
       } else if (nums1[p1] < nums2[p2]) {
         cur = nums1[p1++];
       } else {
         cur = nums2[p2++];
       }
       newArr[p1 + p2 - 1] = cur;
     }
     for (let i = 0; i < m + n; i++) {
       nums1[i] = newArr[i];
     }
   };
   ```

#### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

难度简单 11075 收藏分享切换为英文接收动态反馈

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

**提示：**

- `2 <= nums.length <= 103`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**

##### code

1. Map

   ```js
   var twoSum = function (nums, target) {
     let map = new Map();
     let len = nums.length;
     for (let i = 0; i < len; i++) {
       let remain = target - nums[i];
       if (map.has(remain)) {
         return [i, map.get(remain)];
       }
       map.set(nums[i], i);
     }
     return [];
   };
   ```

#### [189. 旋转数组](https://leetcode-cn.com/problems/rotate-array/)

难度中等 964 收藏分享切换为英文接收动态反馈

给定一个数组，将数组中的元素向右移动 `k` 个位置，其中 `k` 是非负数。

**进阶：**

- 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
- 你可以使用空间复杂度为 O(1) 的 **原地** 算法解决这个问题吗？

**示例 1:**

```
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```

**示例 2:**

```
输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```

**提示：**

- `1 <= nums.length <= 2 * 104`
- `-231 <= nums[i] <= 231 - 1`
- `0 <= k <= 105`

##### code

1.

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  let newArr = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    newArr[(k + i) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = newArr[i];
  }
};
```

2. 翻转数组

```js
var rotate = function (nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const reverse = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};
```

#### [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)

难度简单

给你一个有序数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组** 并在使用 O(1) 额外空间的条件下完成。

##### code

1. 双指针

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let slow = 1;
  let fast = 1;
  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
```

#### [66. 加一](https://leetcode-cn.com/problems/plus-one/)

难度简单 687 收藏分享切换为英文接收动态反馈

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1：**

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

**示例 2：**

```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

**示例 3：**

```
输入：digits = [0]
输出：[1]
```

**提示：**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

##### code

1. 倒循环判断。

   ```js
   var plusOne = function (digits) {
     let len = digits.length;
   
     for (let i = len - 1; i >= 0; i--) {
       digits[i]++;
       digits[i] %= 10;
       if (digits[i] !== 0) return digits;
     }
     digits = new Array(digits.length + 1).fill(0);
     digits[0] = 1;
     return digits;
   };
   ```



## 第二周刷题 栈，队列

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度简单2427收藏分享切换为英文接收动态反馈

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

 

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```

**示例 4：**

```
输入：s = "([)]"
输出：false
```

**示例 5：**

```
输入：s = "{[]}"
输出：true
```

 

**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成

##### code

1. 使用栈匹配

```js
var isValid = function (s) {
  let len = s.length;
  if (len % 2) return false;
  let stack = [];
  for (let i = 0; i < len; i++) {
    switch (s[i]) {
      case ")": {
        if (stack.pop() !== "(") {
          return false;
        }
        break;
      }
      case "]": {
        if (stack.pop() !== "[") {
          return false;
        }
        break;
      }
      case "}": {
        if (stack.pop() !== "{") {
          return false;
        }
        break;
      }
      default:
        stack.push(s[i]);
    }
  }
  return !stack.length;
};
```

2. 使用Map进行匹配

```js
var isValid = function (s) {
  if (s.length % 2) return false;
  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let key of s) {
    if (map.has(key)) {
      if (!stack.length || map.get(key) !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(key);
    }
  }
  return !stack.length;
};
```

#### [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

难度简单

设计一个支持 `push` ，`pop` ，`top` 操作，并能在常数时间内检索到最小元素的栈。

- `push(x)` —— 将元素 x 推入栈中。
- `pop()` —— 删除栈顶的元素。
- `top()` —— 获取栈顶元素。
- `getMin()` —— 检索栈中的最小元素。

 

**示例:**

```
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

 

**提示：**

- `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用。

##### code

```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```



#### [225. 用队列实现栈](https://leetcode-cn.com/problems/implement-stack-using-queues/)

难度简单

请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通队列的全部四种操作（`push`、`top`、`pop` 和 `empty`）。

实现 `MyStack` 类：

- `void push(int x)` 将元素 x 压入栈顶。
- `int pop()` 移除并返回栈顶元素。
- `int top()` 返回栈顶元素。
- `boolean empty()` 如果栈是空的，返回 `true` ；否则，返回 `false` 。

 

**注意：**

- 你只能使用队列的基本操作 —— 也就是 `push to back`、`peek/pop from front`、`size` 和 `is empty` 这些操作。
- 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

 

**示例：**

```
输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
```

 

**提示：**

- `1 <= x <= 9`
- 最多调用`100` 次 `push`、`pop`、`top` 和 `empty`
- 每次调用 `pop` 和 `top` 都保证栈不为空

##### code

```js
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = [];
  this.outQueue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.outQueue.push(x);
  while (!this.empty()) {
    this.outQueue.push(this.stack.shift());
  }
  const temp = this.stack;
  this.stack = this.outQueue;
  this.outQueue = temp;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.empty()) {
    return;
  }
  return this.stack.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.empty()) {
    return;
  }
  return this.stack[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.stack.length) {
    return false;
  }
  return true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```



#### [503. 下一个更大元素 II](https://leetcode-cn.com/problems/next-greater-element-ii/)

难度中等

给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

**示例 1:**

```
输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
```

**注意:** 输入数组的长度不会超过 10000。

##### code

1. 单调栈，小于栈顶元素，元素索引入栈。大于栈顶元素，元素索引出栈。

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let len = nums.length;
    let stack = [];
    let res = new Array(len).fill(-1);
    for (let i = 0; i < 2 * len - 1; i++) {
        while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = nums[i % len];
        }
        stack.push(i % len);
    }
    return res;
};
```



242

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
};
```

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; i++) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
}; 
```

#### [739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)

难度中等

请根据每日 `气温` 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

例如，给定一个列表 `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`，你的输出应该是 `[1, 1, 4, 2, 1, 1, 0, 0]`。

**提示：**`气温` 列表长度的范围是 `[1, 30000]`。每个气温的值的均为华氏度，都是在 `[30, 100]` 范围内的整数。

##### code

1. 单调栈。列表值小于栈顶元素，索引值入栈。列表值大于栈顶元素，索引值出栈。

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let len = temperatures.length;
    let stack = [];
    let res = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};
```



#### [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)

难度困难2376收藏分享切换为英文接收动态反馈

给定 *n* 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
```

**示例 2：**

```
输入：height = [4,2,0,3,2,5]
输出：9
```

**提示：**

- `n == height.length`
- `0 <= n <= 3 * 104`
- `0 <= height[i] <= 105`



##### code

1. 遍历所有元素，元素左边元素的最大值放入`leftMax`，元素右边最大值元素放入`rightMax`。对`i`元素而言，该元素能接收到的雨水为`leftMax[i]`，`right[i]`的最小值，减去`height[i]`。计算所有`i`能接收到雨水的总和。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    if (len === 0) return 0;
    let leftMax = [];
    leftMax[0] = height[0];
    for (let i = 1; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    let rightMax = [];
    rightMax[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    let res = 0;
    for (let i = 0; i < len; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return res;
};
```



## 第三周刷题 哈希表，映射，集合

#### [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)

难度简单

给定两个字符串 *s* 和 *t* ，编写一个函数来判断 *t* 是否是 *s* 的字母异位词。

**示例 1:**

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2:**

```
输入: s = "rat", t = "car"
输出: false
```

**说明:**
你可以假设字符串只包含小写字母。

**进阶:**
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

##### code

1. **`codePointAt()`** 方法返回 一个 Unicode 编码点值的非负整数。利用Map，对第一个字符串每一个字符进行统计。另一个字符串对统计的字符串进行减少。如果减少到统计次数小于0.则不是字母异位词。

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    if (sLen !== tLen) return false;
    let table = new Array(26).fill(0);
    for (let i = 0; i < sLen; i++) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < tLen; i++) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};
```



#### [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)

难度中等

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

**示例:**

```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

**说明：**

- 所有输入均为小写字母。
- 不考虑答案输出的顺序。

通过次数193,787

提交次数294,184

##### code

1. 对数组中每一个字符串处理成数组并进行排序。如果是字母异位词，则字符串排序后必然相同。使用Map，排序后的字符串作为键，未进行排序前的字符串作为键，存在一个数组中。最终求`map.values`

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let key of strs) {
        let arr = Array.from(key);
        arr.sort();
        let str = arr.toString();
        let list = map.get(str) ? map.get(str) : new Array();
        list.push(key);
        map.set(str, list);
    }
    return Array.from(map.values());
};
```



2. `charCodeAt()` 方法返回 `0` 到 `65535` 之间的整数，表示给定索引处的 UTF-16 代码单元。对字符串中每个字符出现次数统计数组作为对象的键，数组为值。数组中存放字母异位词。利用`Object.value`求值。

```js
var groupAnagrams = function(strs) {
    let map = new Object();
    for (let key of strs) {
        const count = new Array(26).fill(0);
        for (let c of key) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(key) : map[count] = [key];
    }
    return Object.values(map);
};
```



#### [217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

难度简单3

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

 

**示例 1:**

```
输入: [1,2,3,1]
输出: true
```

**示例 2:**

```
输入: [1,2,3,4]
输出: false
```

**示例 3:**

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```



##### code

1.  利用set去重

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    let len = nums.length;
    // return !(set.size === nums.length);
    for (let i = 0; i < len; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};
```



#### [594. 最长和谐子序列](https://leetcode-cn.com/problems/longest-harmonious-subsequence/)

难度简单

和谐数组是指一个数组里元素的最大值和最小值之间的差别 **正好是 `1`** 。

现在，给你一个整数数组 `nums` ，请你在所有可能的子序列中找到最长的和谐子序列的长度。

数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。

 

**示例 1：**

```
输入：nums = [1,3,2,2,5,2,3,7]
输出：5
解释：最长的和谐子序列是 [3,2,2,2,3]
```

**示例 2：**

```
输入：nums = [1,2,3,4]
输出：2
```

**示例 3：**

```
输入：nums = [1,1,1,1]
输出：0
```

 

**提示：**

- `1 <= nums.length <= 2 * 104`
- `-109 <= nums[i] <= 109`

##### code

1. 使用Map，统计元素出现次数。遍历，求每一个元素和该元素加1在Map中出现的次数总和，求和最大值。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    let len = nums.length;
    let maxLen = 0;
    for (let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for (let num of nums) {
        if (map.has(num + 1)) {
            maxLen = Math.max(maxLen, map.get(num) + map.get(num + 1));
        }
    }
    return maxLen;
};
```

2. 和1中思想一致，在每一轮，向Map中统计次数的同时，求当前元素，与左右的数在Map中出现次数的和的最大值。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    let len = nums.length;
    let maxLen = 0;
    for (let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
        if (map.has(nums[i] + 1)) {
            maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] + 1));
        }
        if (map.has(nums[i] - 1)) {
            maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] - 1));
        }
    }
    return maxLen;
};
```



#### [128. 最长连续序列](https://leetcode-cn.com/problems/longest-consecutive-sequence/)

难度中等

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

 

**进阶：**你可以设计并实现时间复杂度为 `O(n)` 的解决方案吗？

 

**示例 1：**

```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

**示例 2：**

```
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

 

**提示：**

- `0 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`

##### code

1. 利用set进行所有数组元素的存储与去重。找当前数组中的最小值，找到最小值后，依次遍历。直到在set中不存在。此时遍历的长度为最长连续序列的长度。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let newArr = [...set];
    let maxLen = 0;
    for (let num of newArr) {
        if (!set.has(num  - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++
            }
            maxLen = Math.max(currentStreak, maxLen);
        }
    }
    return maxLen;
};
```



#### 求数组中和为K的区间（哈希记录，防止重复遍历）

##### 问题描述：

> 给定一个整数数组 `nums `和一个目标值 k，请实现一个方法判断 `nums` 中是否存在某个片段（即若干个相连元素）之和等于k。要求时间复杂度为 O(n)。

##### 解题思路：

  总的思路是利用任意两个前n项和的差是否等于K，来判断是否存在这样一个片段。如，i处的和为10 而j处的和为20 i到j这段区间的和即为20-10。
  首先建立一个数组sum，用于记录前n项和，然后遍历`nums`，在遍历的过程中统计前n项和。为了方便第二次遍历判断，需要使用map进行记录。
  最后遍历sum数组，判断是否存在两个值的差等于K。

总结：
  其实到最后一步遍历`sum`数组时，就变成了`leetcode`的第一题两数之和。这两题的共性在于避免重复遍历已经遍历过的数字，所以需要使用map记录已经遍历过的数字。这个思想有点类似于记忆性递归，避免重复子问题的求解。

##### code





## 第四周 二叉树，二叉搜索树

1. 前序遍历 --> 根--> 左 -->右
2. 中序遍历 --> 左--> 根 --> 右
3. 后序遍历 --> 左 --> 右 --> 根

**二叉搜索树: 有序二叉树，排序二叉树，是指一棵空树或者具有以下性质的二叉树**

- 左子树上的所有节点的值均小于它的根节点的值
- 右子树上的所有节点的值均大于它的根节点的值
- 以此类推：左右子树也分别为二叉查找树。



#### [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

难度简单

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

**示例 2：**

```
输入：root = []
输出：[]
```

**示例 3：**

```
输入：root = [1]
输出：[1]
```

**示例 4：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg)

```
输入：root = [1,2]
输出：[2,1]
```

**示例 5：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg)

```
输入：root = [1,null,2]
输出：[1,2]
```

 

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

 

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？



##### code

1. 递归

```js
var inorderTraversal = function(root) {
    const res = new Array();
    const inorder = (root) => {
        if (root === null) return;
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
```

2. 迭代

```js
var inorderTraversal = function(root) {
    const res = new Array();
    const stack = new Array();
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        res.push(node.val);
        root = node.right;
    }
    return res;
};
```



#### [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

难度简单

给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

```
输入：root = [1,null,2,3]
输出：[1,2,3]
```

**示例 2：**

```
输入：root = []
输出：[]
```

**示例 3：**

```
输入：root = [1]
输出：[1]
```

**示例 4：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg)

```
输入：root = [1,2]
输出：[1,2]
```

**示例 5：**

![img](https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg)

```
输入：root = [1,null,2]
输出：[1,2]
```

 

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

 

**进阶：**递归算法很简单，你可以通过迭代算法完成吗？



##### code

1. 递归

```js
var preorderTraversal = function(root) {
    const res = new Array();
    const preorder = (root) => {
        if (root === null) return;
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
};
```

2. 迭代

```js
var preorderTraversal = function(root) {
    const res = new Array();
    const stack = new Array();
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        root = node.right;
    }
    return res;
};
```



#### [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

难度简单601收藏分享切换为英文接收动态反馈

给定一个二叉树，返回它的 *后序* 遍历。

**示例:**

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

##### code

1. 递归

```js
var postorderTraversal = function(root) {
    const res = new Array();
    if (root === null) return res;
    const postorder = (root) => {
        if (root === null) return;
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
};
```

2. 迭代

```js
var postorderTraversal = function(root) {
    const stack = new Array();
    const res = new Array();
    if (root === null) return stack;
    stack.push(root);
    while(stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return res.reverse();
};
```



#### [590. N 叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)

难度简单

给定一个 N 叉树，返回其节点值的 **后序遍历** 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参见示例）。

 

**进阶：**

递归法很简单，你可以使用迭代法完成此题吗?

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[5,6,3,2,4,1]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
```

 

**提示：**

- N 叉树的高度小于或等于 `1000`
- 节点总数在范围 `[0, 10^4]` 内

##### code

1. 递归

```js
var postorder = function(root) {
    const res = new Array();
    const postorderfun = (root) => {
        if (root === null) return;
        for (let i = 0; i < root.children.length; i++) {
            postorderfun(root.children[i]);
        }
        res.push(root.val);
    }
    postorderfun(root);
    return res;
};
```

2. 迭代

```js
var postorder = function(root) {
    if (root === null) return [];
    const res = new Array();
    const stack = new Array();
    stack.push(root);
    while (stack.length) {
        let node = stack.pop()
        res.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i] !== null) {
                stack.push(node.children[i]);
            }
        }
    }
    return res.reverse();
};
```



#### LeetCode笔记

https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/solution/che-di-chi-tou-shu-de-qian-zhong-hou-xu-di-gui-fa-/



#### [589. N 叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

难度简单162收藏分享切换为英文接收动态反馈

给定一个 N 叉树，返回其节点值的 **前序遍历** 。

N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 `null` 分隔（请参见示例）。

 

**进阶：**

递归法很简单，你可以使用迭代法完成此题吗?

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

```
输入：root = [1,null,3,2,4,null,5,6]
输出：[1,3,5,6,2,4]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png)

```
输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

 

**提示：**

- N 叉树的高度小于或等于 `1000`
- 节点总数在范围 `[0, 10^4]` 内

##### code

1. 递归

```js
var preorder = function(root) {
    const res = new Array();
    if (root === null) return res;
    const preorderRecursion = (root) => {
        if (root === null) return;
        res.push(root.val);
        for (let i = 0; i < root.children.length; i++) {
            if (root.children[i] !== null) {
                preorderRecursion(root.children[i]);
            }
        }
    }
    preorderRecursion(root);
    return res;
};
```

2. 迭代

```js
var preorder = function(root) {
    const res = new Array();
    const stack = new Array();
    if (root === null) return res;
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; i--) {
            if (node.children[i] !== null) {
                stack.push(node.children[i]);
            }
        }
    }
    return res;
};
```



#### [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

难度简单886收藏分享切换为英文接收动态反馈

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**示例：**
给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

##### code

1. 递归-深度优先

```js
let maxDepth = function(root) {
    if (root === null)  return 0;
    const height = (root) => {
        if (root === null) return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }
    return height(root);
}
```

2. 迭代-广度优先

```js
let maxDepth = function(root) {
    let res = 0;
    const queue = new Array();
    if (root === null)  return res;
    queue.push(root);
    while (queue.length) {
        let count = queue.length;
        while (count > 0) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            count -= 1;
        }
        res += 1;
    }
    return res;
}
```



#### [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)

难度简单692收藏分享切换为英文接收动态反馈

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过 1 。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：true
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

```
输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
```

**示例 3：**

```
输入：root = []
输出：true
```

 

**提示：**

- 树中的节点数在范围 `[0, 5000]` 内
- `-104 <= Node.val <= 104`

##### code

1. 自顶向下

```js
var isBalanced = function(root) {
    if (root === null) return true;
    const height = (root) => {
        if (root === null) return 0;
        return Math.max(height(root.left), height(root.right)) + 1;
    }
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left) - height(root.right)) <= 1;
};
```

2. 自底向上

```js
var isBalanced = function(root) {
    if (root === null) return true;
    const height = (root) => {
        if (root === null) return 0;
        let left = height(root.left);
        let right = height(root.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        } else {
            return Math.max(height(root.left), height(root.right)) + 1;
        }
    }
    return height(root) >= 0
};
```



#### [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

难度简单

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

 

**示例 :**
给定二叉树

```
          1
         / \
        2   3
       / \     
      4   5    
```

返回 **3**, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

 

**注意：**两结点之间的路径长度是以它们之间边的数目表示。

**思路：**对某一个节点来说，直径等于左右子节点的最大值的和加1。

##### code

```js
var diameterOfBinaryTree = function(root) {
    if (root === null) return 0;
    let res = 1;
    const height = function(root) {
        if (root === null) return 0;
        let left = height(root.left);
        let right = height(root.right);
        res = Math.max(res, left + right + 1);
        return Math.max(left, right) + 1;
    }
    height(root);
    return res - 1;
};
```



翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
备注:
这个问题是受到 Max Howell 的 原问题 启发的 ：

谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

##### code

1. 深度优先-递归

```js
var invertTree = function(root) {
    if (root === null) return root;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right
    root.right = left;
    return root
};
```



#### [617. 合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)

难度简单

给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则**不为** NULL 的节点将直接作为新二叉树的节点。

**示例 1:**

```
输入: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```

**注意:** 合并必须从两个树的根节点开始。



##### code

1. 深度优先

```js
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    let newHeader = new TreeNode(root1.val + root2.val);
    newHeader.left = mergeTrees(root1.left, root2.left);
    newHeader.right = mergeTrees(root1.right, root2.right);
    return newHeader;
};
```

2. 广度优先-迭代

```js
var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    const queue = new Array();
    queue.push(root1);
    queue.push(root2);
    while (queue.length) {
        let root1 = queue.shift();
        let root2 = queue.shift();
        root1.val += root2.val;
        if (root1.left !== null && root2.left !== null) {
            queue.push(root1.left);
            queue.push(root2.left);
        } else if (root1.left === null) {
            root1.left = root2.left;
        }
        if (root1.right !== null && root2.right !== null) {
            queue.push(root1.right);
            queue.push(root2.right);
        } else if (root1.right === null) {
            root1.right = root2.right;
        }
    }
    return root1;
};
```



#### [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

难度简单

给你二叉树的根节点 `root` 和一个表示目标和的整数 `targetSum` ，判断该树中是否存在 **根节点到叶子节点** 的路径，这条路径上所有节点值相加等于目标和 `targetSum` 。

**叶子节点** 是指没有子节点的节点。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：false
```

**示例 3：**

```
输入：root = [1,2], targetSum = 0
输出：false
```

 

**提示：**

- 树中节点的数目在范围 `[0, 5000]` 内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`



##### code

1. 递归

```js
var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    if (root.left === null && root.right === null) {
        return targetSum === root.val;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
```



#### [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)

难度简单

给定两个非空二叉树 **s** 和 **t**，检验 **s** 中是否包含和 **t** 具有相同结构和节点值的子树。**s** 的一个子树包括 **s** 的一个节点和这个节点的所有子孙。**s** 也可以看做它自身的一棵子树。

**示例 1:**
给定的树 s:

```
     3
    / \
   4   5
  / \
 1   2
```

给定的树 t：

```
   4 
  / \
 1   2
```

返回 **true**，因为 t 与 s 的一个子树拥有相同的结构和节点值。

**示例 2:**
给定的树 s：

```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```

给定的树 t：

```
   4
  / \
 1   2
```

返回 **false**。



##### code

1. 深度优先

```js
var isSubtree = function(root, subRoot) {
    if (root === null) return false;
    const check = function (root, subRoot) {
        if (root === null && subRoot === null) return true;
        if (root === null || subRoot === null || root.val !== subRoot.val) return false;
        return check(root.left, subRoot.left) && check(root.right, subRoot.right);
    }
    return check(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
```



#### [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)

难度简单

给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

 

但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

 

**进阶：**

你可以运用递归和迭代两种方法解决这个问题吗？

##### code

1. 递归

```js
var isSymmetric = function(root) {
    if (root === null) return true;
    const check = function(leftRoot, rightRoot) {
        if (leftRoot === null && rightRoot === null) {
            return true;
        }
        if (leftRoot === null || rightRoot === null || leftRoot.val !== rightRoot.val) {
            return false;
        }
        return leftRoot.val === rightRoot.val && check(leftRoot.left, rightRoot.right) && check(rightRoot.left, leftRoot.right);
    }
    return check(root.left, root.right);
};
```

2. 迭代

```js
var isSymmetric = function(root) {
    const queue = new Array();
    if (root === null) return true;
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length) {
        let left = queue.shift();
        let right = queue.shift();
        if (left === null && right === null) continue;
        if (left === null || right === null || left.val !== right.val) return false;
        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
};
```



#### [404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)

难度简单

计算给定二叉树的所有左叶子之和。

**示例：**

```
    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

#####  code

1. 深度优先

```js
var sumOfLeftLeaves = function(root) {
    let res = 0;
    if (root === null) return 0;
    const isLeftLeaves = root => {
        return root.left === null && root.right === null;
    }
    if (root.left !== null) {
        res += isLeftLeaves(root.left) ? root.left.val : sumOfLeftLeaves(root.left);
    }
    if (root.right !== null) {
        res += isLeftLeaves(root.right) ? 0 : sumOfLeftLeaves(root.right);
    }
    return res;    
};
```



2. 广度优先

```js
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;
    const queue = new Array();
    queue.push(root);
    const isLeftLeaves = (root) => {
        return root.left === null && root.right === null;
    }
    let res = 0;
    while(queue.length) {
        let node = queue.pop();
        if (node.left) {
            if (isLeftLeaves(node.left)) {
                res += node.left.val;
            } else {
                queue.push(node.left);
            }
        }
        if (node.right) {
            if (!isLeftLeaves(node.right)) {
                queue.push(node.right);
            }
        }
    }
    return res;
};
```



#### [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

难度简单521收藏分享切换为英文接收动态反馈

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：**叶子节点是指没有子节点的节点。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)

```
输入：root = [3,9,20,null,null,15,7]
输出：2
```

**示例 2：**

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

 

**提示：**

- 树中节点数的范围在 `[0, 105]` 内
- `-1000 <= Node.val <= 1000`

##### code

1. 递归

```js
var minDepth = function(root) {
    if (root === null) return 0;
    let min = Infinity;
    if (root.left === null && root.right === null) return 1;
    if (root.left !== null) {
        min = Math.min(minDepth(root.left), min);
    }
    if (root.right !== null) {
        min = Math.min(minDepth(root.right), min);
    }
    return (min + 1);
};
```

2. 迭代

```js
var minDepth = function(root) {
    if (root === null) return 0;
    const queue = new Array();
    queue.push(root);
    let res = 0;
    while (queue.length) {
        let size = queue.length;
        while (size > 0) {
            let node = queue.shift();
            if (node.left === null && node.right === null) {
                return res + 1;
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            size -= 1;
        }
        res += 1;
    }
    return res;
};
```



## 第五周 递归

**思维要点**

1. 不要人肉递归
2. 找最小子问题
3. 数学归纳法

#### [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

难度简单

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

1. 移动数组

```js
var climbStairs = function(n) {
    let p = 0, q = 0, r = 1;
    for (let i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
```



#### [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)

难度中等

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

- 节点的左子树只包含**小于**当前节点的数。
- 节点的右子树只包含**大于**当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

**示例 1:**

```
输入:
    2
   / \
  1   3
输出: true
```

**示例 2:**

```
输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
```



1. 中序遍历，中序遍历结果一定是顺序递增的。

```js
var isValidBST = function(root) {
    const stack = new Array();
    const res = new Array();
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        res.push(node.val);
        root = node.right;
    }
    for (let i = 1; i < res.length; i++) {
        if (res[i] > res[i - 1]) {
            continue;
        }
        return false;
    }
    return true;
};
```



2. 不断的更新左节点的值为最小值，如果小于左节点的值，则非二叉搜索树。

```js
var isValidBST = function(root) {
    let pre = Number.MIN_SAFE_INTEGER;
    const def = (root) => {
        if (root === null) return true;
        if (!def(root.left)) {
            return false;
        }
        if (root.val <= pre) {
            return false;
        }
        pre = root.val;
        return def(root.right);
    }
    return def(root);
};
```



3.对当前的节点，进行判断，当前的节点小于等于最小值或者大于等于最大值则非二叉搜索树。不断递归。

```js
var isValidBST = function(root) {
    let lower = Number.MIN_SAFE_INTEGER;
    let upper = Number.MAX_SAFE_INTEGER;
    const def = (node, lower, upper) => {;
        if (node === null) return true;
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        return def(node.left, lower, node.val) && def(node.right, node.val, upper);
    }
    return def(root, lower, upper);
};
```





#### [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)

难度中等

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/最近公共祖先/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```

**示例 3：**

```
输入：root = [1,2], p = 1, q = 2
输出：1
```

 

**提示：**

- 树中节点数目在范围 `[2, 105]` 内。
- `-109 <= Node.val <= 109`
- 所有 `Node.val` `互不相同` 。
- `p != q`
- `p` 和 `q` 均存在于给定的二叉树中。

1. 将二叉树所有节点的值以及该节点对应的父节点放入`HashMap`中。对于p节点，对该节点的值及其在父节点的值放入已访问的集合中。对q节点，如果其值已经在已访问集合中出现。则返回该值，如果未出现，向上找其父节点的值是否在已访问集合中。最终找不到返回null。

```js
var lowestCommonAncestor = function(root, p, q) {
    const parent = new Map();
    const visited = new Set();
    const generatorParaent = (root) => {
        if (root.left !== null) {
            parent.set(root.left.val, root);
            generatorParaent(root.left);
        }
        if (root.right !== null) {
            parent.set(root.right.val, root);
            generatorParaent(root.right);
        }
    }
    generatorParaent(root);
    // p may be is undefined
    while (p != null) {
        visited.add(p.val);
        p = parent.get(p.val);
    }
    while (q !== null) {
        if (visited.has(q.val)) {
            return q;
        }
        q = parent.get(q.val);
    }
    return null;
};
```

2. 递归。

```js
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || p === root || q === root) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left === null && right === null) return null;
    if (left === null) return right;
    if (right === null) return left;
    return root;
};
```





#### [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

难度中等

根据一棵树的前序遍历与中序遍历构造二叉树。

**注意:**
你可以假设树中没有重复的元素。

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```
    3
   / \
  9  20
    /  \
   15   7
```

```js
var buildTree = function(preorder, inorder) {
    let n = preorder.length;
    let indexHash = new Map();
    for (let i = 0; i < n; i++) {
        indexHash.set(inorder[i], i);
    }

    const myBuildTree = (preorder, inorder, preorderLeft, preorderRight, inorderLeft, inorderRight) => {
        if (preorderLeft > preorderRight) {
            return null;
        }
        // 前序遍历第一个节点就是根节点
        let preorderRoot = preorderLeft;
        // 找出在中序遍历中的根节点
        let inorderRoot = indexHash.get(preorder[preorderRoot]);
        // 创建一个根节点
        let newRoot = new TreeNode(preorder[preorderRoot]);
        // 得到左子节点的数量
        let leftSubTreeSize = inorderRoot - inorderLeft;
        // 添加左子节点
        newRoot.left = myBuildTree(preorder, inorder, preorderLeft + 1, preorderLeft + leftSubTreeSize, inorderLeft, inorderRoot - 1);
        // 添加柚子节点
        newRoot.right = myBuildTree(preorder, inorder, preorderLeft + leftSubTreeSize + 1, preorderRight, inorderRoot + 1, inorderRight);
        return newRoot;
    }

    return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
};
```



#### [77. 组合](https://leetcode-cn.com/problems/combinations/)

难度中等

给定两个整数 *n* 和 *k*，返回 1 ... *n* 中所有可能的 *k* 个数的组合。

**示例:**

```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = new Array();
    const path = new Array();
    const dfs = (n, k, path, begin) => {
        // 终止条件，找到一个组合
        if (path.length === k) {
            // 向一个数组中添加结果数组
            res.push([...path]);
            return;
        }
        // 循环 剪枝 n - (k - path.length) + 1; n = k - path.length + 1;
        for(let i = begin; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            dfs(n, k, path, i + 1);
            // 回溯
            path.pop();
        }
        return res;
    }

    return dfs(n, k, path, 1);
};
```



#### [46. 全排列](https://leetcode-cn.com/problems/permutations/)

难度中等

给定一个不含重复数字的数组 `nums` ，返回其 **所有可能的全排列** 。你可以 **按任意顺序** 返回答案。

 

**示例 1：**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**示例 2：**

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

**示例 3：**

```
输入：nums = [1]
输出：[[1]]
```

 

**提示：**

- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- `nums` 中的所有整数 **互不相同**

##### code

1. 回溯

```js
var permute = function (nums) {
    const res = new Array();
    const path = new Array();
    const used = new Array(nums.length).fill(false);
    const dfs = (nums, res, path, used) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            // 如果path中没有该数，则加入path
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, res, path, used);
            used[i] = false;
            path.pop();
        }
        return res;
    }
    return dfs(nums, res, path, used)
};
```



#### [47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

难度中等722收藏分享切换为英文接收动态反馈

给定一个可包含重复数字的序列 `nums` ，**按任意顺序** 返回所有不重复的全排列。

 

**示例 1：**

```
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

**示例 2：**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

 

**提示：**

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

##### code

1. 回溯

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = new Array();
    const path = new Array();
    const used = new Array(nums.length).fill(false);
    nums.sort((v1, v2) => v1 - v2);
    const dfs = (nums, res, path, used) => {
        // console.log('nums: ', nums);
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1] || used[i]) {
                continue;
            }
            // 如果path中没有该数，则加入path
            path.push(nums[i]);
            used[i] = true;
            dfs(nums, res, path, used);
            used[i] = false;
            path.pop();
        }
        return res;
    }
    return dfs(nums, res, path, used)
};
```

#### [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)

难度中等670收藏分享切换为英文接收动态反馈

实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数（即，xn）。

 

**示例 1：**

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

**示例 2：**

```
输入：x = 2.10000, n = 3
输出：9.26100
```

**示例 3：**

```
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

 

**提示：**

- `-100.0 < x < 100.0`
- `-231 <= n <= 231-1`
- `-104 <= xn <= 104`

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 const dfs = (x, n) => {
    if (n === 0) return 1;
    let y = dfs(x , Math.floor(n / 2));
    return n % 2 === 0 ? y * y : y * y * x;
}

var myPow = function(x, n) {
    return n >= 0 ? dfs(x, n) : 1 / dfs(x, -n);
};
```

#### [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

难度简单1032收藏分享切换为英文接收动态反馈

给定一个大小为 *n* 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

**示例 1：**

```
输入：[3,2,3]
输出：3
```

**示例 2：**

```
输入：[2,2,1,1,1,2,2]
输出：2
```

 

**进阶：**

- 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
};

const majorityElementRec = (nums, le, ri) => {
    if (le === ri) {
        return nums[le];
    }
    let mid = Math.floor((ri - le) / 2) + le;
    let left = majorityElementRec(nums, le, mid);
    let right = majorityElementRec(nums, mid + 1, ri);
    if (left === right) return left;
    let leftCount = count(nums, left, le, ri);
    let rightCount = count(nums, right, le, ri);
    return leftCount > rightCount ? left : right; 
}

const count = (nums, num, le, ri) => {
    let count = 0;
    for (let i = le; i <= ri; i++) {
        if (nums[i] === num) count++;
    }
    return count;
}
```



#### [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

难度中等

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png)

 

**示例 1：**

```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**示例 2：**

```
输入：digits = ""
输出：[]
```

**示例 3：**

```
输入：digits = "2"
输出：["a","b","c"]
```

 

**提示：**

- `0 <= digits.length <= 4`
- `digits[i]` 是范围 `['2', '9']` 的一个数字。

##### code

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const combinations = new Array();
    const combination = new Array();
    if (digits.length === 0) return combinations;
    const hashMap = new Map();
    hashMap.set('2', 'abc');
    hashMap.set('3', 'def');
    hashMap.set('4', 'ghi');
    hashMap.set('5', 'jkl');
    hashMap.set('6', 'mno');
    hashMap.set('7', 'pqrs');
    hashMap.set('8', 'tuv');
    hashMap.set('9', 'wxyz');
    backtrace(combinations, hashMap, digits, 0, combination);
    return combinations;
};

const backtrace = (combinations, hashMap, digits, index, combination) => {
    if (digits.length === index) {
        let str = combination.join('');
        combinations.push(str);
        return;
    }
    let digit = digits.charAt(index);
    let letters = hashMap.get(digit);
    let count = letters.length;
    for (let i = 0; i < count; i++) {
        combination.push(letters.charAt(i));
        backtrace(combinations, hashMap, digits, index + 1, combination);
        combination.pop();
    }
}
```



