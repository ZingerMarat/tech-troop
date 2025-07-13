import PromptSync from "prompt-sync";

const prompt = PromptSync()

const questions = ['What does the dog say?', 'What does the cat say?', 'What does the cow say?']
const answers = ['Woof', 'Meow', 'Moo']
const usersAnswers = []

let score = 0 

for (let que in questions){
    usersAnswers.push(prompt(`Question ${Number(que)+1}: ${questions[que]} : `))
}

for (let ans in usersAnswers){
    if (usersAnswers[ans].toLowerCase() === answers[ans].toLowerCase()){
        score++
    }
}

console.log(`Final Score: ${score}/${questions.length} correct!`)