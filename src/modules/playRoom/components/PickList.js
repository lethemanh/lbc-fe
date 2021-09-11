import { useEffect, useState } from 'react';
import { Row, Col, Modal, Form, message, InputNumber } from 'antd';
import { connect } from 'react-redux';
import PickItem from './PickItem';
import { imagesPick } from '../../../core/constants/imagePick';
import { socket } from '../../../core/services/socket';
import convertChoice from '../../../core/helper/convertChoice';
import PlayRoomAPIClient from '../services/PlayRoomAPIClient';
import convertResult from '../../../core/helper/convertResult';
import { openNotification, errorNotification } from '../../../core/helper/notification';
import { COMMON_ERROR, EMPTY_INPUT_MONEY_ERROR, PLAYER_CHOICE_ERROR } from '../../../core/constants/errorMessage';

const PickList = ({userBalance, setUserBalance}) => {
  const [isProcessingResult, setIsProcessingResult] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [choiceMascot, setChoiceMascot] = useState("");
  const [betAmount, setBetAmount] = useState(0);

  const onChangeAmount = (value) => setBetAmount(value);
  const onChangeChoice = (e) => setChoiceMascot(e.target.value);

  const showModal = async () => {
    setIsModalVisible(true);
  };

  const bet = async (choiceMascot, amount) => {
    try {
      const choice = convertChoice(choiceMascot);
      if (choice === 0) {
        return errorNotification(PLAYER_CHOICE_ERROR);
      }
      setUserBalance(userBalance - amount);
      socket.emit('bet', {choice, amount});
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    }
  };

  const checkBet = async () => {
    try {
      const playerBet = await PlayRoomAPIClient.userBet();
      if(playerBet.data) {
        setIsProcessingResult(true);
        let convertChoice = convertResult(playerBet.data.choice);
        setChoiceMascot(convertChoice.value)
        setBetAmount(playerBet.data.amount);
      }
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    }
  };

  const handleOk = async() => {
    if (!betAmount) {
      return errorNotification(EMPTY_INPUT_MONEY_ERROR);
    }
    await bet(choiceMascot, betAmount);
    openNotification(betAmount, choiceMascot);
    setIsModalVisible(false);
    setIsProcessingResult(true);
  };

  const handleCancel = () => {
    setBetAmount(0);
    setIsModalVisible(false);
    setChoiceMascot("");
  };

  useEffect(() => {
    socket.on('processing-result', () => {
      setIsProcessingResult(true);
      setIsModalVisible(false);
    });
    socket.on('finish-result', () => {
      setIsProcessingResult(false);
      setBetAmount(0);
      setChoiceMascot("");
    });
    checkBet();
  }, [choiceMascot]);

  return (
  <>
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
                choiceMascot={choiceMascot}
                betAmount={betAmount}
                showModal={showModal}
                onChangeChoice={onChangeChoice}
              />
            </Col>
          ))
        }
      </Row>
    </div>

    <Modal title="Bạn muốn cược bao nhiêu?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal-bet-input">
      <Form
        name="BetForm"
        onFinish={bet}
      >
        <InputNumber
          placeholder="Nhập số tiền cược..."
          min={1}
          max={userBalance}
          size="large"
          onChange={onChangeAmount}
          value={betAmount}
        />
      </Form>
    </Modal>
  </>
  )
}

const mapState = (state) => ({
  userBalance: state.user.userBalance
});

const mapDispatch = (dispatch) => ({
  setUserBalance: dispatch.user.setUserBalance
});

export default connect(mapState, mapDispatch)(PickList);