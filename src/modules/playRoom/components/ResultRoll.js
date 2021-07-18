import React, { useState } from 'react'

const ResultRoll = () => {
  const [imagesResultRoll, setImagesResultRoll] = useState([
    { 
      id: 1,
      src: "./image-pick/tom.png",
      value: "Tom",
    },
    { 
      id: 2,
      src: "./image-pick/ca.png",
      value: "Ca",
    },
    { 
      id: 3,
      src: "./image-pick/cua.png",
      value: "Cua",
    },
    // { 
    //   id: 4,
    //   src: "./image-pick/ga.png",
    //   value: "Ga",
    // },
    // { 
    //   id: 5,
    //   src: "./image-pick/nai.png",
    //   value: "Nai",
    // },
    
    // { 
    //   id: 6,
    //   src: "./image-pick/bau.png",
    //   value: "Bau",
    // },
  ]);
  return (
    <div className="previous-results">
      <div className="head-result">
        <h3>KẾT QUẢ</h3>
      </div>
      <div className="result">
        <div className="result-box">
          {imagesResultRoll.map((result) => (
            <input type="image" className='img-result' src={result.src} alt="" name="" value={result.value} />
          ) )}
        </div>
      </div>
    </div>
  )
}

export default ResultRoll;
