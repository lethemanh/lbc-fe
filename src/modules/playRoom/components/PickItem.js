const PickItem = ({ img, isProcessingResult, choiceMascot, betAmount, showModal, onChangeChoice }) => {
  return (
    <>
      {
        isProcessingResult
        ? <div className="game-pick-select" >   
            { img.value === choiceMascot
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
    </>
  )
}

export default PickItem;
