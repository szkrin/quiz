export default function Answer({ index, question, answer, isCorrect }) {
    let textColor = 'text-green-400';
    if (!isCorrect) {
        textColor = 'text-red-400';
    }
    return (
        <div>
            <div className="mb-3">
                <span className="bg-black rounded-full text-white px-3 py-2">{index}</span>
            </div>
            <div className="mb-2">{question}</div>
            <div className={textColor}>{answer !== '' ? answer : '---------------------------'}</div>
        </div>
    )
}