import complete from '../../assets/quiz-complete.png';
import Answer from './Answer';
import Percentages from './Percentages';
import { useContext } from 'react';
import { questionsContext } from '../../store/questionsContextProvider';

export default function Results() {
    const { answers } = useContext(questionsContext);
    return (

        <div className='lg:w-1/2 bg-purple-800 rounded-2xl px-12 py-8 text-center text-violet-300 shadow-3xl border-2 border-violet-950'>
            <img className='m-auto size-28 bg-violet-500 rounded-full p-2 shadow-3xl border-2 border-violet-950' src={complete} alt='logo' />
            <h2 className='uppercase lg:text-6xl text-5xl mt-8 font-bold'>quiz completed!</h2>

            <Percentages />

            <span className='border-b-4 pb-12 mb-12 border-violet-400 lg:w-1/2 block m-auto'></span>

            <div className="text-center grid grid-cols-1 gap-10 text-violet-400 font-semibold">
                {answers.map((answer) => <Answer key={answer.qId} index={answer.qId + 1} question={answer.question} answer={answer.answer} isCorrect={answer.isCorrect} />)}
            </div>
        </div>
    )
}