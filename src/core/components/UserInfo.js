import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import UserAPIClient from '../services/UserAPIClient';

const Component = function UserInfo(props) {
   const getInfoPlayer = useCallback(async () => {
    try {
      const infoUser = await UserAPIClient.getInfoPlayer();
      props.setUserInfo(infoUser.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  useEffect(() => {
    getInfoPlayer();
  }, [getInfoPlayer]);

  return (
    <div className="info-user">
      <span className="info-user-name">Xin chào: <strong> { props.userInfo.username } </strong> </span>
      <span className="info-user-balance">Bạn đang có: <strong> { props.userInfo.balance } $</strong> </span>
    </div>
  );
}

const mapState = (state) => ({
  userInfo: state.user.userInfo
});

const mapDispatch = (dispatch) => ({
  setUserInfo: dispatch.user.setUserInfo
});

export default connect(mapState, mapDispatch)(Component);