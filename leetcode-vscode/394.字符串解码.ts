/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  const isDigit = (s: string): boolean => {
    const DIGIT = /\d/;
    return DIGIT.test(s);
  };
  const isInstack = (s: string): boolean => {
    const INSTACK = /[a-zA-Z]|\[/;
    return INSTACK.test(s);
  };
  const LEN = s.length;
  const stack = [];
  let ptr = 0;
  let multi = 0;
  while (ptr < LEN) {
    // 数字
    if (isDigit(s[ptr])) {
      while (isDigit(s[ptr])) {
        let toNumber = parseFloat(s[ptr]);
        multi = multi * 10 + toNumber;
        ptr++;
      }
      stack.push(multi);
      multi = 0;
    }

    // 入栈
    if (isInstack(s[ptr])) {
      stack.push(s[ptr]);
      ptr++;
      // 出栈，拼接成子串入栈
    } else {
      let sub = [];
      while (stack[stack.length - 1] !== "[") {
        sub.unshift(stack.pop());
      }
      // 左括号出栈
      stack.pop();
      // 重复次数
      let repTime = stack.pop();
      // 子串
      let subStr = "";
      while (repTime > 0) {
        repTime--;
        subStr += sub.join("");
      }
      stack.push(subStr);
      ptr++;
    }
  }
  return stack.join("");
}
// @lc code=end
