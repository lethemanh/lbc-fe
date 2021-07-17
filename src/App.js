import React, { useState } from 'react';
import Router from './core/router';
import Page from './core/components/Page';
import getPageLayout from './core/helper/getPageLayout';

const App = () => {
  return (<Router>{(content, routeProps) => (
    <Page
      component={getPageLayout(routeProps.location.pathname)}
      {...routeProps}
    >
      {content}
    </Page>
  )}</Router>)
};

export default App;
