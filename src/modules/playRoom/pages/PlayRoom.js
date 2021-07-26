import { Row, Col} from 'antd';
import PickList from '../components/PickList';
import './PlayRoom.scss';

function PlayRoom(props) {
  return (
    <Row justify="center" gutter={[32, 32]} >
      <Col xs={24} xl={12} > 
        <PickList />
      </Col>
    </Row>
  );
}

export default PlayRoom;
