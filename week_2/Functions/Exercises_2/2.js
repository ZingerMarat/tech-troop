const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

const cleanText =(text) => {
  let newSpecialChars = [...specialChars]
  newSpecialChars.push(' ')
  let cleanedText = text

  newSpecialChars.forEach(char => {
    cleanedText = cleanedText.split(char).join(' ')
  })

  cleanedText = cleanedText.toLowerCase()

  cleanedText = cleanedText.split(' ').filter(word => word);

  return cleanedText
}

const addToCounter = (word) =>{
  if (word in wordCounts){
    wordCounts[word] += 1
  } else {
    wordCounts[word] = 1
  }
}

const countWords = (sentence) => {
  const arrOfWords = cleanText(sentence)

  for (word of arrOfWords){
    addToCounter(word)
  }
}

countWords(story)
console.log(wordCounts);
