import routes from '../router/routes';

const getPageLayout = (pathname) => {
  const currentRoutes = routes.find(route => route.path === pathname) || {};
  if (currentRoutes.meta && currentRoutes.meta.layout) {
    return currentRoutes.meta.layout;
  } else {
    return null;
  }
}

export default getPageLayout;
