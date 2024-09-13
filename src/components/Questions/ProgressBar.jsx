import { useEffect, useState } from "react";

const TIMER = 10000;
export default function ProgressBar({ nextQuestion }) {

    const [remainingTime, setRemainingTime] = useState(TIMER);

    if (remainingTime === 0) {
        nextQuestion();
    }

    let width = remainingTime / TIMER * 100;
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => (prev >= 10 ? prev - 10 : 0));
        }, 10);
        return () => clearInterval(interval);
    }, [nextQuestion]);

    return (
        <div className="w-1/2 h-2 bg-violet-900 rounded-xl m-auto">
            <div className="bg-violet-500 h-2 rounded-full" style={{ width: `${width}%` }}></div>
        </div>
    )
}