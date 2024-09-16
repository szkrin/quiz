
export default function AnswerButton({ onButtonClick, children, higlight, correctAnswer }) {

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
        <button onClick={onButtonClick} className={`w-full p-4 ${bg} rounded-full text-lg text-indigo-950 font-bold`}>{children}</button>
    )
}