import React, { useEffect, useState } from 'react'

const Clock = () => {
    
    const[time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, [])

    function formatTime () 
    {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours>12?"PM":"AM";
        hours = hours>12?hours%12:hours;

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        
        return `${hours}:${minutes}:${seconds} ${meridian}`;
    }

  return (
    <div>
      <div className='clock'>
        <div className="time">
            {formatTime()}
        </div>
      </div>
    </div>
  )
}

export default Clock
