import authRoutes from '../../modules/auth/router';
import playRoomRoutes from '../../modules/playRoom/router';

export default [
  ...authRoutes,
  ...playRoomRoutes
];
