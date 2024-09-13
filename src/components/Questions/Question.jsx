import AnswerButton from './AnswerButton';
import ProgressBar from './ProgressBar';
import questionData from '../../questions';

export default function Question({ questionIndex, nextQuestion }) {
    return (
        <div className='w-1/2 py-8 px-20 bg-indigo-950 text-center justify-center rounded-xl shadow-3xl'>
            <ProgressBar nextQuestion={nextQuestion} />
            <p className='mt-4 text-violet-300 text-2xl'>{questionData[questionIndex].text}</p>
            <div className='pt-8 space-y-2'>
                {questionData[questionIndex].answers.map((item)=><AnswerButton onButtonClick={nextQuestion}>{item}</AnswerButton>)}
            </div>
        </div>
    )
}