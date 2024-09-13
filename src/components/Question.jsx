import AnswerButton from './AnswerButton';
import ProgressBar from './ProgressBar';

export default function Question() {
    return (
        <div className='w-1/2 py-8 px-20 bg-indigo-950 text-center justify-center mt-8 rounded-xl shadow-3xl'>
            <ProgressBar />
            <p className='mt-4 text-violet-300 text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='pt-8 space-y-2'>
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
            </div>
        </div>
    )
}