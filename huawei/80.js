const permutation = (n) => {
  const used = new Array(n + 1).fill(false)
  const list = []
  const res = []
  const backtrace = (n, list) => {
    if (list.length === n) {
      res.push([...list])
      return
    }
    for (let i = 1; i <= n; ++i) {
      if (!used[i]) {
        used[i] = true
        list.push(i)
        backtrace(n, list)
        list.pop()
        used[i] = false
      }
    }
  }
  backtrace(n, list)
  return res
}

const res = permutation(3)
const str = res[3 - 1].join('')
console.log(parseFloat(str))
console.log('res: ', res);