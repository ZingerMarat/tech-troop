import readline from "readline"

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

const trie = new AutoCompleteTrie()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askUser = () => {
  rl.question(`\n> `, (answer) => {
    inputHandler(answer.trim())
  })
}

const inputHandler = (input) => {
  const [command, param] = input.split(" ")

  if(['add', 'find', 'complete'].includes(command) && !param){
    console.log("✗ Please provide an argument");
    askUser()
    return   
  }

  switch (command) {
    case "add":
      trie.addWord(param)
      console.log(`✓ Added '${param}' to dictionary`)
      break

    case "find":
      trie.findWord(param) ? console.log(`✓ '${param}' exists in dictionary`) : console.log(`✗ '${param}' not found in dictionary`)
      break

    case "complete":
      const suggestions = trie.predictWords(param)
      console.log(`Suggestions for '${param}': ${suggestions.length > 0 ? suggestions.join(", ") : "No matches found."}`)
      break

    case "help":
      console.log(`
Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program
`)
      break

    case "exit":
      console.log("GoodBye!")
      rl.close()
      return

    default:
      console.log("✗ Unknown command. Type 'help' for a list of commands.")
  }

  askUser()
}

const run = () => {
  console.log(`\n=== AutoComplete Trie Console ===\nType 'help' for commands`)

  askUser()
}

run()
