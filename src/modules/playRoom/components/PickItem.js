import { useState } from 'react';
import { Modal, Input } from 'antd';

const PickItem = ({ img }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="game-pick-select" onClick={showModal} >                
        <input type="image" className="game-pick-select-img" src={img.src} alt="" value={img.value} />
      </div>

      <Modal title="Bạn muốn cược bao nhiêu?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Nhập số tiền cược..." />
      </Modal>
    </>
  )
}

export default PickItem;

