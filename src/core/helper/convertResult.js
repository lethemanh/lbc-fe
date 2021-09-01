import { MASCOT, IMAGE  } from "../constants/imagePick";

const convertResult = (result) => {
  switch(result) {
    case 1:
      return {
        src: IMAGE.TOM,
        value: MASCOT.TOM
      };
    case 2:
      return {
        src: IMAGE.CA,
        value: MASCOT.CA
      };
    case 3:
      return {
        src: IMAGE.CUA,
        value: MASCOT.CUA
      };
    case 4:
      return {
        src: IMAGE.GA,
        value: MASCOT.GA,
      };
    case 5:
      return {
        src: IMAGE.NAI,
        value: MASCOT.NAI,
      };
    case 6:
      return {
        src: IMAGE.BAU,
        value: MASCOT.BAU,
      };
    default:
      return 0;
  }
}

export default convertResult;
