import React, { useState } from 'react';
import { BetMoneyModal } from './BetMoneyModal';

const PickItem = ({ img }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <BetMoneyModal showModal={showModal} setShowModal={setShowModal} />
      <div class="select"  onClick={openModal} >                
        <input type="image" className="img-select" src={img.src} alt="" name="" value={img.value} />
      </div>
    </>
  )
}

export default PickItem;
