const AutoCompleteTrie = require("../models/AutoCompleteTrie.js")

const view = {
  showWelcome() {
    console.log(`\n=== AutoComplete Trie Console ===\nType 'help' for commands`)
  },

  showHelp() {
    console.log(`
Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  help              - Show this message
  exit              - Quit program
    `)
  },

  showSuccess(message) {
    console.log(`✓ ${message}`)
  },

  showError(message) {
    console.log(`✗ ${message}`)
  },

  showSuggestions(prefix, list) {
    const formattedList = list.map(item =>{
      return `${item} (${AutoCompleteTrie.dictionary[item]})`
    })
    console.log(
      `Suggestions for '${prefix}': ${formattedList.length ? formattedList.join(", ") : "No matches found."}`
    )
  }
}

module.exports = view