export default function Percentages() {
    return (
        <div className='flex flex-row columns-3 mt-12 justify-evenly text-center text-violet-400'>
            <div>
                <span className='lg:text-6xl text-4xl block'>0%</span>
                <span className='uppercase text-sm font-semibold'>skipped</span>
            </div>
            <div>
                <span className='lg:text-6xl text-4xl block'>43%</span>
                <span className='uppercase text-sm block font-semibold'>answered</span>
                <span className='uppercase text-sm block font-semibold'>correctly</span>
            </div>
            <div>
                <span className='lg:text-6xl text-4xl block'>57%</span>
                <span className='uppercase text-sm block font-semibold'>answered</span>
                <span className='uppercase text-sm block font-semibold'>incorrectly</span>
            </div>
        </div>
    )
}