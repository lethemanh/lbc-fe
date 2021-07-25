import { isLoggedIn } from '../../helper/auth';

const requireLogin = (to, from, next) => {
  if (to.meta.requireAuth && !isLoggedIn()) {
    next.redirect('/login');
  } else if ((to.path === '/login' || to.path === 'register') && isLoggedIn()) {
    next.redirect('/');
  }
  next();
};

export default requireLogin;
