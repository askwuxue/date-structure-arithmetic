function firstUniqChar(s: string): string {
  if (s.length === 0) {
    return ''
  }
  const map = new Map()
  for (let key of s) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let key of s) {
    if (map.get(key) === 1) {
      return key
    }
  }
  return ''
};