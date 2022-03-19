// 输出水仙花数
const output = (N, M) => {
  let start = Math.pow(10, N - 1)
  let end = Math.pow(10, N)
  const res = []
  for (let i = start; i < end; ++i) {
    let sum = 0;
    let temp = i;
    while (temp !== 0) {
      sum += Math.pow(temp % 10, N)
      temp = ~~(temp / 10)
    }
    if (sum === i) {
      res.push(sum)
    }
  }
  if (M < res.length) {
    return res[M]
  }
  if (M >= res.length) {
    return M * res[res.length - 1]
  }
  return res
}

const res = output(3, 5)
console.log('res: ', res);