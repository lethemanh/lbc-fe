import { isLoggedIn } from '../../helper/auth';

const requireLogin = (to, from, next) => {
  if (to.meta.requireAuth && !isLoggedIn()) {
    next.redirect('/login');
  } else if ((to.location.pathname === '/login' || to.location.pathname === '/register') && isLoggedIn()) {
    next.redirect('/');
  }
  next();
};

export default requireLogin;
