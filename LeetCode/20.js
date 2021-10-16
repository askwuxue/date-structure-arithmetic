const isValid = function (s) {
  if (s.length % 2) {
    return false
  }
  const len = s.length
  const stack = []
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for (let i = 0; i < len; ++i) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      if (stack.pop() === map.get(s[i])) {
        continue
      } else {
        return false
      }
    }
  }
  return true
}

const params = '([)]'

const res = isValid(params)
console.log('res: ', res)
