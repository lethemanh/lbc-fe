import { useState, useEffect } from 'react';
import { socket } from '../../../core/services/socket';
import imgResultWaiting from '../../../assets/images/resultWaiting.jpg';
import convertResult from '../../../core/helper/convertResult';
import { v4 } from "uuid";

const ResultRoll = () => {
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    socket.on('return-result-to-player', (returnResult) => {
      if (returnResult[0] && returnResult[0].rollResult) {
        let resultConverted = returnResult[0].rollResult.map((item) => {
          return convertResult(item);
        });
        setResults(resultConverted);
      } else {
        setResults([]);
      }
    });

    socket.on('show-result', () => {
      setShowResult(true);
    });
  
    socket.on('end-show-result', () => {
      setShowResult(false);
      setResults([]);
    });
  }, []);

  return (
    <div className="result-container">
      <div className="head-result">
        <h3>KẾT QUẢ</h3>
      </div>
      <div className="result-box">
        { 
          showResult
          ? <div className="result-box-display">
              {results.map((result) => (
                <img className='img-result' src={result.src} alt="img-result" key={v4()} />
              ))}
            </div>
          : <div className="result-box-display">
              {[...Array(3).keys()].map((key) => (
                <img className='img-result' src={imgResultWaiting} alt="img-result" key={key} />
              ))}
            </div>
        }
      </div>
    </div>
  )
}

export default ResultRoll;
