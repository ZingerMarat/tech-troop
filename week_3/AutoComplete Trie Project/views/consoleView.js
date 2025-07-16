export const view = {
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
    console.log(
      `Suggestions for '${prefix}': ${list.length ? list.join(", ") : "No matches found."}`
    )
  }
}
