class AutoCompleteTrie {
  constructor(value = "root") {
    this.value = value
    this.children = {}
    this.endOfWord = false
  }

  addWord(word) {
    let node = this
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new AutoCompleteTrie(char)
      }
      node = node.children[char]
    }
    node.endOfWord = true
  }

  findWord(word) {
    let node = this
    for (let char of word) {
      if (!node.children[char]) return false
      node = node.children[char]
    }
    return node.endOfWord
  }

  predictWords(prefix) {
    const start = this._getRemainingTree(prefix, this)
    if (!start) return []

    const suggestions = []
    this._allWordsHelper(prefix, start, suggestions)
    return suggestions
  }

  _getRemainingTree(prefix, node) {
    for (let char of prefix) {
      if (!node.children[char]) return null
      node = node.children[char]
    }
    return node
  }

  _allWordsHelper(prefix, node, words) {
    if (node.endOfWord) words.push(prefix)
    for (let char of Object.keys(node.children)) {
      this._allWordsHelper(prefix + char, node.children[char], words)
    }
  }
}

module.exports = AutoCompleteTrie