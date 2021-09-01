import { useEffect, useState } from 'react';
import { Modal, Form, message, InputNumber } from 'antd';
import { socket } from '../../../core/services/socket';
import convertChoice from '../../../core/helper/convertChoice';
import { COMMON_ERROR, EMPTY_INPUT_MONEY_ERROR, PLAYER_CHOICE_ERROR } from '../../../core/constants/errorMessage';
import { openNotification, errorNotification } from '../../../core/helper/notification';
import { connect } from 'react-redux';

const PickItem = ({ img, isProcessingResult, setIsProcessingResult, userBalance, setUserBalance }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChoice, setIsChoice] = useState(false);
  const [choiceMascot, setChoiceMascot] = useState();
  const [betAmount, setBetAmount] = useState(0);

  const onChangeAmount = (value) => setBetAmount(value);
  const onChangeChoice = (e) => setChoiceMascot(e.target.value);

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

  const showModal = async () => {
    setIsModalVisible(true);
  };

  const handleOk = async() => {
    if (!betAmount) {
      return errorNotification(EMPTY_INPUT_MONEY_ERROR);
    }
    await bet(choiceMascot, betAmount);
    openNotification(betAmount, choiceMascot);
    setIsModalVisible(false);
    setIsProcessingResult(true);
    setIsChoice(true);
  };

  const handleCancel = () => {
    setBetAmount(0);
    setIsModalVisible(false);
  };
  
  useEffect(() => {
    socket.on('processing-result', () => {
      setIsModalVisible(false);
    });
    socket.on('finish-result', () => {
      setIsChoice(false);
      setBetAmount(0);
    });
  }, []);

  return (
    <>
      {
        isProcessingResult
        ? <div className="game-pick-select" >   
            { isChoice 
            ? <div> 
                <div className="black-box">
                  <span className="black-box-text">{betAmount} $</span> 
                </div>
                <input type="image" className="game-pick-selectd-img" src={img.src} alt="Ảnh linh vật" value={img.value}/>
              </div>
            : <input type="image" className="game-pick-select-img" src={img.src} alt="Ảnh linh vật" value={img.value}/>
            }            
          </div>
        : <div className="game-pick-select" onClick={showModal} >                
            <input type="image" className="game-pick-select-img" src={img.src} alt="Ảnh linh vật" value={img.value} onClick={onChangeChoice} />
          </div>
      }

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

export default connect(mapState, mapDispatch)(PickItem);
