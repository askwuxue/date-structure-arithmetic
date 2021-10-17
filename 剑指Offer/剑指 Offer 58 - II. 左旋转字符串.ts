function reverseLeftWords(s: string, n: number): string {
  const len = s.length
  return s.substring(n, len) + s.substring(0, n)
};