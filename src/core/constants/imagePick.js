import imgTom from '../../assets/images/image-pick/tom.png';
import imgCa from '../../assets/images/image-pick/ca.png';
import imgCua from '../../assets/images/image-pick/cua.png';
import imgGa from '../../assets/images/image-pick/ga.png';
import imgNai from '../../assets/images/image-pick/nai.png';
import imgBau from '../../assets/images/image-pick/bau.png';

export const IMAGE = {
  TOM: imgTom,
  CA: imgCa,
  CUA: imgCua,
  GA: imgGa,
  NAI: imgNai,
  BAU: imgBau
}

export const MASCOT = {
  TOM: 'Tôm',
  CA: 'Cá',
  CUA: 'Cua',
  GA: 'Gà',
  NAI: 'Nai',
  BAU: 'Bầu'
}
  
export const imagesPick = [
  {
    id: 'pick1',
    src: imgTom,
    value: MASCOT.TOM,
  },
  { 
    id: 'pick2',
    src: imgCa,
    value: MASCOT.CA,
  },
  { 
    id: 'pick3',
    src: imgCua,
    value: MASCOT.CUA,
  },
  { 
    id: 'pick4',
    src: imgGa,
    value: MASCOT.GA,
  },
  { 
    id: 'pick5',
    src: imgNai,
    value: MASCOT.NAI,
  },
  { 
    id: 'pick6',
    src: imgBau,
    value: MASCOT.BAU,
  },
];