import AnswerButton from './AnswerButton';
import ProgressBar from './ProgressBar';
import questionData from '../../questions';
import { useEffect, useState, useContext } from 'react';
import { questionsContext } from '../../store/questionsContextProvider';

let highSpeed = false;
let next = false;
let clickedAnswer = '';
let showAnswer = false;
let TIMER = 10000;

export default function Question() {

    const { questionIndex, nextQuestion, updateAnswer } = useContext(questionsContext);

    const [remainingTime, setRemainingTime] = useState(TIMER);
    let width = remainingTime / TIMER * 100;

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => (prev >= 10 ? prev - 10 : 0));
        }, 10);
        if (remainingTime === 0) {
            if (!next) {
                if (clickedAnswer === '') {
                    updateAnswer('');
                    TIMER = 10000;
                    setRemainingTime(TIMER);
                    nextQuestion();
                } else {
                    highSpeed = false;
                    next = true;
                    showAnswer = true;
                    TIMER = 1000;
                    setRemainingTime(TIMER);
                }
            } else {
                showAnswer = false;
                next = false;
                clickedAnswer = '';
                TIMER = 10000;
                setRemainingTime(TIMER);
                nextQuestion();
            }
        }
        return () => clearInterval(interval);
    }, [remainingTime]);



    function answerClickHandler(answer) {
        clickedAnswer = answer;
        updateAnswer(clickedAnswer);
        TIMER = 1000;
        if (!highSpeed) {

            setRemainingTime(TIMER);
        }
        highSpeed = true;
    }

    return (
        <div className='lg:w-1/2 py-8 lg:px-20 px-4 bg-indigo-950 text-center justify-center rounded-xl shadow-3xl'>
            <ProgressBar width={width} highSpeed={highSpeed} />
            <p className='mt-4 text-violet-300 text-2xl'>{questionData[questionIndex].text}</p>
            <div className='pt-8 space-y-2'>
                {questionData[questionIndex].answers.map((item) =>
                    <AnswerButton
                        key={item}
                        onButtonClick={() => answerClickHandler(item)}
                        higlight={item === clickedAnswer}
                        correctAnswer={(item === clickedAnswer && showAnswer) ? clickedAnswer === questionData[questionIndex].answers[0] : undefined}
                        disabled={showAnswer}
                        grayOut={item !== clickedAnswer && showAnswer}
                    >
                        {item}
                    </AnswerButton>
                )}
            </div>
        </div>
    )
}