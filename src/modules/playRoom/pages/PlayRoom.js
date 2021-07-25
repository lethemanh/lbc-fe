import { Row, Col} from 'antd';
import './PlayRoom.scss';
import ChatBox from '../components/ChatBox';

function PlayRoom(props) {
  return (
    <Row justify="center" >
      <Col xs={24} xl={6} > 
        <ChatBox />
      </Col>
    </Row>
  );
}

export default PlayRoom;
