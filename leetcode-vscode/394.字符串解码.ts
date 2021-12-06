/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  const INSTACK = /[a-zA-Z]|\[/;
  const LEN = s.length
  const stack = []
  let ptr = 0
  let multi = 0
  while (ptr < LEN) {
    let toNumber = Number(s[ptr])
    if (!Number.isNaN(toNumber)) {
      while(!Number.isNaN(toNumber)) {
        multi = multi * 10 + toNumber
        ptr++
        toNumber = Number(s[ptr])
      }
      stack.push(multi)
      multi = 0
    } else if (INSTACK.test(s[ptr])) {
      stack.push(s[ptr])
      ptr++
    } else {
      let sub = []
      while (stack[stack.length - 1] !== '[') {
        sub.unshift(stack.pop())
      }
      // 左括号出栈
      stack.pop()
      let repTime = stack.pop()
      let subStr = ''
      while (repTime > 0) {
        repTime--
        subStr += sub.join('')
      }
      stack.push(subStr)
      ptr++
    }
  }
  return stack.join('')
};
// @lc code=end

