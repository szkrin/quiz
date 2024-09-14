export default function Start({onStartClick}) {
    return (
        <div className='lg:w-1/2 text-center h-full mt-12'>
            <button onClick={onStartClick} className='bg-indigo-950 text-4xl font-bold px-12 py-6 rounded-full uppercase w-full shadow-3xl border-2 border-violet-950'>Start quiz</button>
        </div>
    )
}