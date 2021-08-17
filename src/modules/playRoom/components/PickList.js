import { Row, Col } from 'antd';
import PickItem from './PickItem';
import { imagesPick } from '../../../core/constants/imagePick';
import { useEffect, useState } from 'react';
import { socket } from '../../../core/services/socket';

const PickList = () => {
  const [isProcessingResult, setIsProcessingResult] = useState(false);
  
  useEffect(() => {
    socket.on('processing-result', () => {
      setIsProcessingResult(true);
    });
    socket.on('finish-result', () => {
      setIsProcessingResult(false);
    });
  }, [  ]);

  return (
    <div className="game">
      <Row justify="center" gutter={[0, 24]} >
        {
          imagesPick.map(img => (
            <Col xs={24} sm={12} lg={8} key={img.id} > 
              <PickItem 
                img={img} 
                isProcessingResult={isProcessingResult} 
                setIsProcessingResult={setIsProcessingResult} 
                key={img.id} 
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default PickList;
