export default function ProgressBar({ width, highSpeed }) {

    return (
        <div className="w-1/2 h-2 bg-violet-900 rounded-xl m-auto">
            <div className="bg-violet-500 h-2 rounded-full" style={{ width: `${width}%`, backgroundColor: `${highSpeed ? 'yellow' : ' rgb(139 92 246 / var(--tw-bg-opacity))'}` }}></div>
        </div>
    )
}