import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";

const TIMER = 10000;

export default forwardRef(function ProgressBar({ nextQuestion }, ref) {

    const [remainingTime, setRemainingTime] = useState(TIMER);
    const [highSpeed, setHighSpeed] = useState(false);
    const divRef = useRef();

    function speedUpTimer() {
        if (remainingTime > 1000) {
            setHighSpeed(true);
            setRemainingTime(1000);
        }
    }
    useImperativeHandle(ref, () => {
        return {
            speedUpTimer() {
                speedUpTimer();
            }
        }
    });

    let width = remainingTime / TIMER * 100;


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => (prev >= 10 ? prev - 10 : 0));
        }, 10);

        if (remainingTime === 0) {
            setHighSpeed(false);
            setRemainingTime(TIMER);
            nextQuestion();
        }

        return () => clearInterval(interval);
    }, [remainingTime]);

    return (
        <div ref={divRef} className="w-1/2 h-2 bg-violet-900 rounded-xl m-auto">
            <div className="bg-violet-500 h-2 rounded-full" style={{ width: `${width}%`, backgroundColor: `${highSpeed ? 'yellow' : ' rgb(139 92 246 / var(--tw-bg-opacity))'}` }}></div>
        </div>
    )
})