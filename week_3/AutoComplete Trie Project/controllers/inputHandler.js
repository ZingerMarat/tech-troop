const view = require("../views/consoleView.js")

const inputHandler = (input, trie, rl, askUser) => {
  const [command, param] = input.split(" ")

  if (["add", "find", "complete"].includes(command) && !param) {
    view.showError("Please provide an argument")
    askUser()
    return
  }

  switch (command) {
    case "add":
      trie.addWord(param)
      view.showSuccess(`Added '${param}' to dictionary`)
      break
    case "find":
      trie.findWord(param) ? view.showSuccess(`'${param}' exists in dictionary`) : view.showError(`'${param}' not found in dictionary`)
      break
    case "complete":
      const suggestions = trie.predictWords(param)
      view.showSuggestions(param, suggestions)
      break
    case "use":
      const incremented = trie.incrementWord(param)      
      incremented >= 0? view.showSuccess(`Incremented usage for '${param}' (now ${incremented})`) : view.showError(`'${param}' not found in dictionary`)
      break
    case "help":
      view.showHelp()
      break
    case "exit":
      console.log("Goodbye!")
      rl.close()
      return
    default:
      view.showError("Unknown command. Type 'help' for a list of commands.")
  }

  askUser()
}

module.exports = inputHandler
