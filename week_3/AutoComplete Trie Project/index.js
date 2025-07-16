import readline from "readline"
import { inputHandler } from './controllers/inputHandler.js'
import { AutoCompleteTrie } from './models/AutoCompleteTrie.js'
import { view } from './views/consoleView.js'

export const trie = new AutoCompleteTrie()

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export const askUser = () => {
  rl.question("\n> ", (answer) => {
    inputHandler(answer.trim())
  })
}

const run = () => {
  view.showWelcome()
  askUser()
}

run()
