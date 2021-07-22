import React, { useEffect, useState }  from 'react';

const CountDown = () => {
  const [countDown, setCountDown] = useState(59);

  useEffect(() => {
    const time = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    if (countDown === -1) {
      setCountDown(59) ;
    }

    return () => {
      clearInterval(time);
    };
  }, [countDown]);

  return (
    <div className="countdown">
      <p id="time-countdown">
        Thời gian còn lại: 
        <strong> {countDown} </strong>
      </p>
    </div>
  )
}

export default CountDown;
