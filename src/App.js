import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import UserAPIClient from '../src/core/services/UserAPIClient';
import Router from './core/router';
import Page from './core/components/Page';
import getPageLayout from './core/helper/getPageLayout';
import { connect } from 'react-redux';
import { COMMON_ERROR } from '../src/core/constants';
import { message } from 'antd';

const App = (props) => {
  const [isFetchingUserProfile, setIsFetchingUserProfile] = useState(true);

  useEffect(() => {
    if (props.token) {
      fetchUser();
    } else {
      setIsFetchingUserProfile(false);
    }
  }, [props.token]);

  async function fetchUser () {
    try {
      setIsFetchingUserProfile(true);
      const infoUser = await UserAPIClient.getInfoPlayer();
      props.setUserName(infoUser.data.username);
      props.setUserId(infoUser.data._id);
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    } finally {
      setIsFetchingUserProfile(false);
    }
  }
  
  return (
    <Router>
      {(content, routeProps) => (
        isFetchingUserProfile
        ? (<div className="container-full-page"><Spin size="large" /></div>)
        : (<Page
            component={getPageLayout(routeProps.location.pathname)}
            {...routeProps}
          >
            {content}
          </Page>)
      )}
    </Router>
  );
};

const mapState = (state) => ({
  token: state.auth.token
});

const mapDispatch = (dispatch) => ({
  setUserName: dispatch.user.setUserName,
  setUserId: dispatch.user.setUserId
});

export default connect(mapState, mapDispatch)(App);
