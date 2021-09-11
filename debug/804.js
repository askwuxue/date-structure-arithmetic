/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const set = new Set()
  for (const word of words) {
    let str = ''
    for (let key of word) {
      let index = key.codePointAt() - 'a'.codePointAt()
      str += arr[index]
    }
    set.add(str)
  }
  return set.size
}