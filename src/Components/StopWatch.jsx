import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => 
{
    const[elapsedTime, setElpasedTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef(null);
    const timerRef = useRef(0);

    useEffect(() => 
    {
        if(isRunning)
        {
            intervalIdRef.current = setInterval(() => 
            {
                setElpasedTime(Date.now()-timerRef.current);
            }, 1);
        }

        return () => 
        {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const start = () => 
    {
        setIsRunning(true);
        timerRef.current = Date.now() - elapsedTime;
    }

    const stop = () => 
    {
        setIsRunning(false);
    }

    const reset = () => 
    {
        setIsRunning(false);
        setElpasedTime(0);
    }

    const formatTime = () => {
        let hours = Math.floor(elapsedTime/(1000*60*60)%12);
        let minutes = Math.floor((elapsedTime)/(1000*60)%60);
        let seconds = Math.floor((elapsedTime)/(1000)%60);
        let milliseconds = Math.floor((elapsedTime%1000)/10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
        
    }

  return (

    <>
        <div className='stopClock'>
            <div className='stopTime'>
                {formatTime()}
                <br/>
                <button onClick={start} className="buttons start">
                    Start
                </button>
                <button onClick={stop} className="buttons stop">
                    Stop
                </button>
                <button onClick={reset} className="buttons reset">
                    Reset
                </button>
            </div>
        </div>
    </>
  )
}

export default StopWatch
