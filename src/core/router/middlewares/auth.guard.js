import { isLoggedIn } from '../../helper/auth';

const requireLogin = (to, from, next) => {
  if (to.meta.requireAuth && !isLoggedIn()) {
    next.redirect('/login');
  }
  next();
};

export default requireLogin;
