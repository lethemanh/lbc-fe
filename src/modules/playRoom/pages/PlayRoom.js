import React from 'react';
import { Row, Col} from 'antd';
import PickList from '../components/PickList';
import './PlayRoom.css';
import ChatBox from '../components/ChatBox';
import ResultRoll from '../components/ResultRoll';
import CountDown from '../components/CountDown';

function PlayRoom() {
  return (
    <Row justify="center" gutter={[32, 32]} >
      <Col xs={24} sm={24} md={24} xl={6} > 
        <CountDown />
        <ResultRoll />
      </Col>
      <Col xs={24} sm={24} md={24} xl={12} > 
        <PickList />
      </Col>
      <Col xs={24} sm={24} md={24} xl={6} > 
        <ChatBox />
      </Col>
    </Row>
  );
}

export default PlayRoom;
