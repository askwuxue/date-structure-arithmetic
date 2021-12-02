function isUnique(astr: string): boolean {
  if (astr.length === 0) {
    return true
  }
  let mask = 0
  for (const char of astr) {
    // 计算需要左移动的位数
    let bit = char.charCodeAt(0) - 'a'.charCodeAt(0)
    // 该位置已经存在1
    if ((mask & (1 << bit)) !== 0) {
      return false
    } else {
      // 该位置设置为1
      mask |= (1 << bit)
    }
  }
  return true
};