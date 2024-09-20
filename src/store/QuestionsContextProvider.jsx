import { createContext, useState } from 'react';
import questionData from '../questions';

let questionIndex = 0;
const ANSWERS = [];

export const questionsContext = createContext({
    answers: [],
    updateAnswer: () => { },
    nextQuestion: () => { },
    questionIndex: 0,
    content: ''
});

export default function QuestionsContextProvider({ children }) {

    const [content, setContent] = useState('start');

    function nextQuestionHandler() {
        if (questionIndex > 6) {
            setContent('results');
        } else {
            setContent(questionIndex);
        }
    }
    
    function updateAnswersHandler(answer) {
        ANSWERS[questionIndex] =
        {
            qId: questionIndex,
            question: questionData[questionIndex].text,
            answer: answer,
            isCorrect: questionData[questionIndex].answers[0] === answer
        }
        questionIndex++;
    }

    const ctxValue = {
        answers: ANSWERS,
        updateAnswer: updateAnswersHandler,
        nextQuestion: nextQuestionHandler,
        questionIndex: questionIndex,
        content: content
    }

    return <questionsContext.Provider value={ctxValue}>
        {children}
    </questionsContext.Provider>
}