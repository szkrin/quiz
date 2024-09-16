export default function Percentages({ answers }) {
    let skipped = 0;
    let correct = 0;
    let incorrect = 0;
    answers.forEach(element => {
        console.log(element);
        if (element.answer === '') {
            skipped++;
        } else if (element.isCorrect) {
            correct++;
        } else {
            incorrect++;
        }
    });
    let skippedPercent = Math.round((skipped / 7) * 100, 0);
    let correctPercent = Math.round((correct / 7) * 100, 0);
    let incorrectPercent = 100 - correctPercent - skippedPercent;
    return (
        <div className='flex flex-row columns-3 mt-12 justify-evenly text-center text-violet-400'>
            <div>
                <span className='lg:text-6xl text-4xl block'>{skippedPercent}%</span>
                <span className='uppercase text-sm font-semibold'>skipped</span>
            </div>
            <div>
                <span className='lg:text-6xl text-4xl block'>{correctPercent}%</span>
                <span className='uppercase text-sm block font-semibold'>answered</span>
                <span className='uppercase text-sm block font-semibold'>correctly</span>
            </div>
            <div>
                <span className='lg:text-6xl text-4xl block'>{incorrectPercent}%</span>
                <span className='uppercase text-sm block font-semibold'>answered</span>
                <span className='uppercase text-sm block font-semibold'>incorrectly</span>
            </div>
        </div>
    )
}