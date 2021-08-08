import Login from '../pages/Login';
import Register from '../pages/Register';

const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    icon: 'login',
    meta: {}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {}
  }
];

export default authRoutes;
