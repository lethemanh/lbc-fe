import imgTom from '../../assests/images/image-pick/tom.png';
import imgCa from '../../assests/images/image-pick/ca.png';
import imgCua from '../../assests/images/image-pick/cua.png';
import imgGa from '../../assests/images/image-pick/ga.png';
import imgNai from '../../assests/images/image-pick/nai.png';
import imgBau from '../../assests/images/image-pick/bau.png';

const MASCOT = {
  TOM: 'TOM',
  CA: 'CA',
  CUA: 'CUA',
  GA: 'GA',
  NAI: 'NAI',
  BAU: 'BAU'
}
  
export const imagesPick = [
  {
    id: 1,
    src: imgTom,
    value: MASCOT.TOM,
  },
  { 
    id: 2,
    src: imgCa,
    value: MASCOT.CA,
  },
  { 
    id: 3,
    src: imgCua,
    value: MASCOT.CUA,
  },
  { 
    id: 4,
    src: imgGa,
    value: MASCOT.GA,
  },
  { 
    id: 5,
    src: imgNai,
    value: MASCOT.NAI,
  },
  { 
    id: 6,
    src: imgBau,
    value: MASCOT.BAU,
  },
];