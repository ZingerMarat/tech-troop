import { AutoCompleteTrie } from '../models/AutoCompleteTrie.js'
import { getViewElements, updateWordCount, showTemporaryMessage } from '../views/view.js'

const trie = new AutoCompleteTrie()
let count = 0

export const initController = () => {
    const {addButton, addInput, suggestInput} = getViewElements()

    addButton.addEventListener('click', () => {
        const word = addInput.value.trim().toLowerCase()
        if (word && !trie.findWord(word)){
            trie.addWord(word)
            count++
            updateWordCount(count)
            addInput.value = ''

            showTemporaryMessage('ok', word)
        } else if (word && trie.findWord(word)){
            showTemporaryMessage('exists', word)
        } else {
            showTemporaryMessage('empty')
        }

    })

    suggestInput.addEventListener('input', (event) => {
        const input = event.target.value
        const ul = document.getElementById("suggestions-list")
        ul.innerHTML = ''
        
        if(input){
           const predictedWords = trie.predictWords(input)
           predictedWords.forEach((word, index) => {
            const prefix = document.createElement('div')
            prefix.className = 'prefix'
            prefix.textContent = input

            const postfix = document.createElement('div')
            postfix.textContent = word.slice(input.length)

            const li = document.createElement('li')
            li.appendChild(prefix)
            li.appendChild(postfix)

            ul.appendChild(li)
           })
        }
    })
}