import React, { useState } from 'react';
import { Row, Col } from 'antd';
import PickItem from './PickItem';
import { BetMoneyModal } from './BetMoneyModal';

const PickList = () => {
  const [imagesPick, setImagesPick] = useState([
    { 
      id: 1,
      src: "./image-pick/tom.png",
      value: "Tom",
    },
    { 
      id: 2,
      src: "./image-pick/ca.png",
      value: "Ca",
    },
    { 
      id: 3,
      src: "./image-pick/cua.png",
      value: "Cua",
    },
    { 
      id: 4,
      src: "./image-pick/ga.png",
      value: "Ga",
    },
    { 
      id: 5,
      src: "./image-pick/nai.png",
      value: "Nai",
    },
    
    { 
      id: 6,
      src: "./image-pick/bau.png",
      value: "Bau",
    },
  ]);

  return (
    <>
      <div id="game">
        <Row justify="center" gutter={[0, 24]} >
          {
            imagesPick.map((img) => (
              <Col xs={24} sm={12} md={12} xl={8} lg={8} > 
                <Row justify="center" >
                  <Col span={24} >
                    <PickItem img={img} key={img.id} />
                  </Col>
                </Row>
              </Col>
            ))
          }
        </Row>
      </div>
    </>
  )
}

export default PickList;
