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

const countWords = (sentence) => {
  cleanText(sentence).reduce((acc, word) => {
                      acc[word] = (acc[word] || 0) + 1;
                      return acc
                    }, wordCounts)
}

countWords(story)
console.log(wordCounts);
