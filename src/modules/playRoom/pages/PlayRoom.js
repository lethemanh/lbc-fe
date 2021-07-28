import { Row, Col} from 'antd';
import CountDown from '../components/CountDown';
import './PlayRoom.scss';

function PlayRoom(props) {
  return (
    <Row justify="center" >
      <Col xs={24} xl={6} > 
        <CountDown />
      </Col>
    </Row>
  );
}

export default PlayRoom;