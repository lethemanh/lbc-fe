import { Row, Col} from 'antd';
import PickList from '../components/PickList';
import ChatBox from '../components/ChatBox';
import './PlayRoom.scss';

function PlayRoom(props) {
  return (
    <Row justify="center" gutter={[32, 32]} >
      <Col xs={24} xl={12} > 
        <PickList />
      </Col>
      <Col xs={24} xl={6} > 
        <ChatBox />
      </Col>
    </Row>
  );
}

export default PlayRoom;
