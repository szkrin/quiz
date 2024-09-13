
export default function AnswerButton({ onButtonClick ,children }) {
    return (
        <button onClick={onButtonClick} className='w-full p-4 bg-sky-400 rounded-full text-lg text-indigo-950 font-bold'>{children}</button>
    )
}