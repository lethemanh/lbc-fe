import { useState, useEffect } from 'react';
import { socket } from '../../../core/services/socket';
import { TIME_LEFT_DEFAULT } from '../../../core/constants/common';

const CountDown = () => {
  const [count, setCount] = useState(TIME_LEFT_DEFAULT);
  const [isProcessingResult, setIsProcessingResult] = useState(false);
  
  useEffect(() => {
    socket.on('tick', (timeLeft) => {
      setCount(timeLeft);
    });
    socket.on('processing-result', () => {
      setIsProcessingResult(true);
    });
    socket.on('finish-result', () => {
      setIsProcessingResult(false);
    });
  }, []);
  
  return (
    <div className="countdown">
      {
        isProcessingResult
        ? <p className="countdown-time">
          Đang xử lý kết quả...
        </p> 
        : <p className="countdown-time">
          Thời gian còn lại để đặt cược: 
          <br/>
          <strong>{count}</strong>
        </p>
      }
    </div>
  )
}

export default CountDown;
