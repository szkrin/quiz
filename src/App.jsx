import logo from './assets/quiz-logo.png'
import Question from './components/Questions/Question';
import Start from './components/Start';
import Results from './components/Results/Reuslts';
import questionData from './questions';
import { useState } from 'react';

let questionIndex = 0;
const ANSWERS = [];

function App() {
    const [content, setContent] = useState('start');

    function nextQuestionHandler() {
        if (questionIndex > 6) {
            setContent('results');
        } else {
            setContent(questionIndex);
            questionIndex++;
        }
    }

    function updateAnswersHandler(answer) {
        ANSWERS.push({
            qId: questionIndex,
            question: questionData[questionIndex - 1].text,
            answer: answer,
            isCorrect: questionData[questionIndex - 1].answers[0] === answer
        })
    }

    return (
        <main className="lg:flex flex-col items-center">
            <div className='w-full lg:mt-6 text-center mb-8'>
                <img className='m-auto size-12 ' src={logo} alt='logo' />
                <h1 className='text-5xl font-bold tracking-widest mt-4 bg-gradient-to-r from-purple-300 to-violet-600 inline-block text-transparent bg-clip-text'>REACTQUIZ</h1>
            </div>
            {content == 'start' ? <Start onStartClick={nextQuestionHandler} /> : content === 'results' ? <Results answers={ANSWERS} /> : <Question updateAnswer={updateAnswersHandler} questionIndex={content} nextQuestion={nextQuestionHandler} />}
        </main>
    );
}

export default App;
