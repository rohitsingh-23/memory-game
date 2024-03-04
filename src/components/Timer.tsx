import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Timer: React.FC = () => {
    const [sec, setSec] = useState(60)
    const { setScreen } = useAppContext();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSec((prev) => {
                let temp = prev - 1;
                if (temp == 0) {
                    setScreen(5);
                }
                return prev - 1
            })
        }, 1000)

        return ()=> clearInterval(intervalId)
    }, [])

  return (
      <div className='timer-container' style={{backgroundColor: `${sec <= 10 ? "#DF2E38" : "#5D9C59"}`}}>
          Time Left : {sec}
    </div>
  );
};

export default Timer;