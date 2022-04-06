/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 *
 * https://leetcode-cn.com/problems/design-add-and-search-words-data-structure/description/
 *
 * algorithms
 * Medium (51.11%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    56.8K
 * Total Submissions: 111.4K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n' +
  '[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 * 
 * 实现词典类 WordDictionary ：
 * 
 * 
 * WordDictionary() 初始化词典对象
 * void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 * bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些
 * '.' ，每个 . 都可以表示任何一个字母。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * 
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * 输出：
 * [null,null,null,null,false,true,true,true]
 * 
 * 解释：
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // 返回 False
 * wordDictionary.search("bad"); // 返回 True
 * wordDictionary.search(".ad"); // 返回 True
 * wordDictionary.search("b.."); // 返回 True
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= word.length <= 25
 * addWord 中的 word 由小写英文字母组成
 * search 中的 word 由 '.' 或小写英文字母组成
 * 最多调用 10^4 次 addWord 和 search
 * 
 * 
 */

// @lc code=start
class WordDictionary {
  private trieRoot: TrieRoot;
  constructor() {
    this.trieRoot = new TrieRoot();
  }

  addWord(word: string): void {
    this.trieRoot.insert(word);
  }

  search(word: string): boolean {
    const dfs = (index: number, node: TrieRoot) => {
      if (index === word.length) {
        return node.isEnd;
      }
      let ch = word[index];
      if (ch !== ".") {
        const child = node.children[ch.charCodeAt(0) - "a".charCodeAt(0)];
        if (child && dfs(index + 1, child as TrieRoot)) {
          return true;
        }
      } else {
        for (const child of node.children) {
          if (child && dfs(index + 1, child as TrieRoot)) {
            return true;
          }
        }
      }
      return false;
    };
    return dfs(0, this.trieRoot);
  }
}

// 前缀树
class TrieRoot {
  children: number[] | TrieRoot[];
  isEnd: boolean;
  constructor() {
    this.children = new Array(26).fill(0);
    this.isEnd = false;
  }

  insert(word: string): void {
    let node = this;
    for (const ch of word) {
      let index = ch.charCodeAt(0) - "a".charCodeAt(0);
      //   children 中还没有该字母开头的前缀对象
      if (node.children[index] === 0) {
        node.children[index] = new TrieRoot();
      }
      node = node.children[index] as this;
    }
    node.isEnd = true;
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
