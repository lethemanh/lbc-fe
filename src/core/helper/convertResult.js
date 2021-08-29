import { MASCOT, IMAGE  } from "../constants/imagePick";

const convertResult = (result) => {
  switch(result) {
    case 1:
      return {
        id: 'result1',
        src: IMAGE.TOM,
        value: MASCOT.TOM
      };
    case 2:
      return { 
        id: 'result2',
        src: IMAGE.CA,
        value: MASCOT.CA
      };
    case 3:
      return { 
        id: 'result3',
        src: IMAGE.CUA,
        value: MASCOT.CUA
      };
    case 4:
      return { 
        id: 'result4',
        src: IMAGE.GA,
        value: MASCOT.GA,
      };
    case 5:
      return { 
        id: 'result5',
        src: IMAGE.NAI,
        value: MASCOT.NAI,
      };
    case 6:
      return { 
        id: 'result6',
        src: IMAGE.BAU,
        value: MASCOT.BAU,
      };
    default:
      return 0;
  }
}

export default convertResult;
