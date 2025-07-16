
class AutoCompleteTrie {
  constructor(value = "root") {
    this.value = value
    this.children = {}
    this.endOfWord = false
  }

  addWord(word) {
    let currentNode = this
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new AutoCompleteTrie(char)
      }
      currentNode = currentNode.children[char]
    }
    currentNode.endOfWord = true
  }

  findWord(word) {
    let currentNode = this
    for (let char of word) {
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char]
      } else {
        return false
      }
    }
    return true
  }


  predictWords(prefix) {
    const suggestions = []
    const startPoint = this._getRemainingTree(prefix, this)

    if (!startPoint) {
      return []
    }

    this._allWordsHelper(prefix, startPoint, suggestions)
    return suggestions
  }

  _getRemainingTree(prefix, node) {
    for (let char of prefix) {
      if (node.children[char]) {
        node = node.children[char]
      } else {
        return null
      }
    }
    return node
  }

  _allWordsHelper(prefix, node, allWords) {
    if (node.endOfWord) {
      allWords.push(prefix)
    }

    for (let char of Object.keys(node.children)) {
      this._allWordsHelper(prefix + char, node.children[char], allWords)
    }
  }
}
