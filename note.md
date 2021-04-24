# 数据结构和算法

## 如何高效，有效的算法

《异类 不一样的启示录》
1. 切碎知识点
2. 刻意练习 不爽
3. 反馈 主动反馈（自己去进行的） 被动反馈（被别人反馈）


_每学完一个知识点就去LeetCode刷对应的题目_

**最好的方式是什么？**
**时间复杂度是多少？空间复杂度是多少**
**寻求大佬的反馈**

## 数据结构
### 栈
1. 访问：时间复杂度O(1)
2. 删除，插入，最差时间复杂度为O(n)

#### `leetCode`

#####  [20.有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

难度简单2352

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

​	利用栈的先进先出的特性，先考虑边界条件，栈内元素为奇数个，直接退出。遇到左括号，入栈。遇到右括号，出栈。出栈的元素和右括号进行匹配。匹配失败则退出。



**code**

```ts
/**
 * @param {string} s
 * @return {boolean}
 */
//  TODO 运行时间过长
var isValid = function(s) {
    let arr = [];
    let len = s.length;
    if (len % 2) {
        return false;
    }
        for (let i = 0; i < len; i++) {
            if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
                arr.push(s[i]);
            }            
            else {
                switch(arr.pop()) {
                    case '(': {
                        if(s[i] !== ')') {
                            return false;
                        }
                        break;
                    }
                    case '[': {
                        if(s[i] !== ']') {
                            return false;
                        }
                        break;
                    }
                    case '{': {
                        if(s[i] !== '}') {
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

难度简单885

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

​	首先栈的功能全部要实现，在普通栈的基础上，访问最小元素的时间复杂度是O(n)。所以要其他的方式来访问栈内最小元素。一般来说，用空间换取时间是一种方式。借助最小栈（`minStack`）来实现，最小栈内始终在栈顶放置最小值。使普通栈（`stack`）和最小栈保持同步。最小栈为空，普通栈`push`，也`push`到最小栈。如果普通栈`push`的值小于最小栈的栈顶值，也`push`到最小栈。如果普通栈`push`的值大于最小栈栈顶值，不`push`到最小栈。



**code**

```js
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popNumber = this.stack.pop();
    if (popNumber === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
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
环形队列实现的主要思想是，将默认的头指针(front)和尾指针(rear)都初始为0。rear总是指向最后一个元素的后一个位置(该位置是预留的一个约定空间)。
因此，如果队列的maxSize为5，则最大有效数据个数为4.因此，队列空的条件是：(rear + 1) % maxSize == front; 队列满：rear == front
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


##### LeetCode
###### 题目描述
写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-recent-calls
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

###### 代码实现
主要实现思想，利用队列。先将当前的时间放进队列内，然后从队列头依次判断对应的队列元素是否出队。
出队条件，队列中的元素 < (当前t - 3000)
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
        // return this.arr.length;
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
2. 查找：时间复杂为O(n)
3. 删除和插入的时间复杂度O(1)

#### LeetCode
###### 题目描述
输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
###### 代码实现
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



###### 题目描述
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



##### 代码实现
```javascript
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
var reverseList = function(head) {
    // 如果链表为空或者只有一个元素
    if (head === null || head.next === null) {
        return head;
    }
    // 当前的节点
    var cur = head;
    // 上一个节点
    var prev = null;
    // 临时变量
    var temp = null;
    // 双指针 不断的移动cur和prev 用cur影响prev
    while (cur !== null) {
        // 临时存当前元素
        temp = cur.next;
        // 当前指针指向下一个元素
        cur.next = prev;
        // 更新下一个元素
        prev = cur;
        // 还原当前元素
        cur = temp;
    }
    return prev;
};
```
###### 题目描述
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]


限制：

0 <= 链表长度 <= 10000



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

###### 代码实现
1. 
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
var reversePrint = function(head) {
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

2. 
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
var reversePrint = function(head) {
    if (head === null) return [];
    let num = [];
    const vistor = function (head) {
        if (head !== null) {
            vistor(head.next);
            num.push(head.val);
        }
    }
    vistor(head)
    return num;
};
```


###### 题目描述
存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。

返回同样按升序排列的结果链表。

 

示例 1：


输入：head = [1,1,2]
输出：[1,2]
示例 2：


输入：head = [1,1,2,3,3]
输出：[1,2,3]


提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

###### 代码实现
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
var deleteDuplicates = function(head) {
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

### 时间复杂度和空间复杂度



## 算法