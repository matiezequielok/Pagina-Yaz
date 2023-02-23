import underscore from "underscore"
import questions from "./questions.js"

const randomQuestion = () => {
    const question = questions[Math.floor(Math.random() * questions.length)]
    const answers = underscore.shuffle(question.answers)
    question.answers = answers
    return question
}

export default randomQuestion
