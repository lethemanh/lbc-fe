import PlayRoom from '../pages/PlayRoom';
import MainLayout from '../../../core/layout/MainLayout';

const authRoutes = [
  {
    path: '/',
    name: 'PlayRoom',
    component: PlayRoom,
    meta: {
      requireAuth: false,
      layout: MainLayout
    }
  }
];

export default authRoutes;
