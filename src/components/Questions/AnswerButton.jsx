
export default function AnswerButton({ onButtonClick, children, higlight, correctAnswer, disabled, grayOut }) {

    let bg = 'bg-sky-400';
    if (higlight) {
        bg = 'bg-amber-500';
    }
    if (correctAnswer === true) {
        bg = 'bg-green-400';
    } else if (correctAnswer === false) {
        bg = 'bg-red-400';
    }

    return (
        <button disabled={disabled} onClick={onButtonClick} className={`w-full p-4 ${bg} ${grayOut ? 'bg-opacity-70' : ''} rounded-full text-lg text-indigo-950 font-bold`}>{children}</button>
    )
}