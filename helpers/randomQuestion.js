import shuffle from "../node_modules/underscore/modules/shuffle.js"
import questions from "./questions.js"

const randomQuestion = () => {
    const question = questions[Math.floor(Math.random() * questions.length)]
    const answers = shuffle(question.answers)
    question.answers = answers
    return question
}

export default randomQuestion
