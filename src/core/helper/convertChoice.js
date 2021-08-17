import { MASCOT  } from "../constants/imagePick";

const convertChoice = (choice) => {
  switch(choice) {
    case MASCOT.TOM:
      return 1;
    case MASCOT.CA:
      return 2;
    case MASCOT.CUA:
      return 3;
    case MASCOT.GA:
      return 4;
    case MASCOT.NAI:
      return 5;
    case MASCOT.BAU:
      return 6;
    default:
      return 0;
  }
}

export default convertChoice;
