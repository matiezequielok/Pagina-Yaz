import questions from "./questions.js"

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }

const randomQuestion = () => {
    
    const question = questions[Math.floor(Math.random() * questions.length)]
    const answers = shuffle(question.answers)
    question.answers = answers
    return question
}

export default randomQuestion
