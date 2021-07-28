import { MASCOTS } from '../../../core/constants/mascots';
import imgTom from '../../../assests/images/image-pick/tom.png';
import imgCa from '../../../assests/images/image-pick/ca.png';
import imgCua from '../../../assests/images/image-pick/cua.png';

const ResultRoll = () => {
  // Fake data to display
  const imagesResultRoll = [
    { 
      id: 1,
      src: imgTom,
      value: MASCOTS.TOM,
    },
    { 
      id: 2,
      src: imgCa,
      value: MASCOTS.CA,
    },
    { 
      id: 3,
      src: imgCua,
      value: MASCOTS.CUA,
    },
  ];

  return (
    <div className="result-container">
      <div className="head-result">
        <h3>KẾT QUẢ</h3>
      </div>
      <div className="result-box">
        <div className="result-box-display">
          {imagesResultRoll.map((result) => (
            <img type="image" className='img-result' src={result.src} alt="img-result" value={result.value} key={result.id} />
          ) )}
        </div>
      </div>
    </div>
  )
}

export default ResultRoll;
