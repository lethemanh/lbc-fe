import { Row, Col} from 'antd';
import './PlayRoom.scss';
import ResultRoll from '../components/ResultRoll';

function PlayRoom(props) {
  return (
    <Row justify="center" gutter={[32, 32]} >
      <Col xs={24} sm={24} md={24} xl={6} > 
        <ResultRoll />
      </Col>
    </Row>
  );
}

export default PlayRoom;
