import { Row, Col } from 'antd';
import PickItem from './PickItem';
import { imagesPick } from '../../../core/constants/imagePick';

const PickList = () => {
  return (
    <div className="game">
      <Row justify="center" gutter={[0, 24]} >
        {
          imagesPick.map(img => (
            <Col xs={24} sm={12} md={12} lg={8} key={img.id} > 
              <Row justify="center" key={img.id} >
                <Col span={20} offset={2} key={img.id} >
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
