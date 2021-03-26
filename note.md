# 数据结构和算法

## 如何高效，有效的算法

《异类 不一样的启示录》
1. 切碎知识点
2. 刻意练习 不爽
3. 反馈 主动反馈（自己去进行的） 被动反馈（被别人反馈）

每学完一个知识点就去LeetCode刷对应的题目
**最好的方式是什么？**
**时间复杂度是多少？空间复杂度是多少**
**寻求大佬的反馈**

## 数据结构
### 栈
1. 访问：时间复杂度O(1)
2. 删除，插入，最差时间复杂度为O(n)

#### leetCode
1. 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
```ts
var removeDuplicates = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
};
```

2. 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
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

### 链表 
1. 改善数组的删除和插入操作
2. 查找：时间复杂为O(n)
3. 删除和插入的时间复杂度O(1)

#### LeetCode








### 时间复杂度和空间复杂度



## 算法