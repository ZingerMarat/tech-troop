const readline = require("readline")
const inputHandler = require("./controllers/inputHandler")
const AutoCompleteTrie = require("./models/AutoCompleteTrie.js")
const view = require("./views/consoleView.js")

const trie = new AutoCompleteTrie()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askUser = () => {
  rl.question("\n> ", (answer) => {
    inputHandler(answer.trim(), trie, rl, askUser)
  })
}

const run = () => {
  view.showWelcome()
  askUser()
}

run()