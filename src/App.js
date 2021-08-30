import React, { useEffect } from 'react';
import UserAPIClient from '../src/core/services/UserAPIClient';
import Router from './core/router';
import Page from './core/components/Page';
import getPageLayout from './core/helper/getPageLayout';
import { connect } from 'react-redux';
import { COMMON_ERROR } from '../src/core/constants';
import { message } from 'antd';

const App = (props) => {
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser () {
    try {
      const infoUser = await UserAPIClient.getInfoPlayer();
      props.setUserName(infoUser.data.username);
      props.setUserId(infoUser.data._id);
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    }
  }
  
  return (<Router>{(content, routeProps) => (
    <Page
      component={getPageLayout(routeProps.location.pathname)}
      {...routeProps}
    >
      {content}
    </Page>
  )}</Router>)
};

const mapDispatch = (dispatch) => ({
  setUserName: dispatch.user.setUserName,
  setUserId: dispatch.user.setUserId
});

export default connect(null, mapDispatch)(App);
