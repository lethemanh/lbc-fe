import { useState } from 'react';
import { Row, Col } from 'antd';
import PickItem from './PickItem';
import imgTom from '../../../assests/images/image-pick/tom.png';
import imgCa from '../../../assests/images/image-pick/ca.png';
import imgCua from '../../../assests/images/image-pick/cua.png';
import imgGa from '../../../assests/images/image-pick/ga.png';
import imgNai from '../../../assests/images/image-pick/nai.png';
import imgBau from '../../../assests/images/image-pick/bau.png';

const PickList = () => {
  const [imagesPick, setImagesPick] = useState([
    { 
      id: 1,
      src: imgTom,
      value: "Tom",
    },
    { 
      id: 2,
      src: imgCa,
      value: "Ca",
    },
    { 
      id: 3,
      src: imgCua,
      value: "Cua",
    },
    { 
      id: 4,
      src: imgGa,
      value: "Ga",
    },
    { 
      id: 5,
      src: imgNai,
      value: "Nai",
    },
    
    { 
      id: 6,
      src: imgBau,
      value: "Bau",
    },
  ]);

  return (
    <div className="game">
      <Row justify="center" gutter={[0, 24]} >
        {
          imagesPick.map(img => (
            <Col xs={24} sm={12} md={12} lg={8} > 
              <Row justify="center" >
                <Col span={20} offset={2} >
                  <PickItem img={img} key={img.id} />
                </Col>
              </Row>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default PickList;
