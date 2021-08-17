import { message } from 'antd';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { COMMON_ERROR } from '../constants';
import UserAPIClient from '../services/UserAPIClient';

const UserInfo = (props) => {
  const [userName, setUserName] = useState();
  
  useEffect(async() => {
    try {
      const infoUser = await UserAPIClient.getInfoPlayer();
      setUserName(infoUser.data.username);
      props.setUserBalance(infoUser.data.balance);
    } catch (error) {
      message.error(error.message || COMMON_ERROR);
    }
  }, []);

  return (
    <div className="info-user">
      <span className="info-user-name">Xin chào: <strong> { userName } </strong> </span>
      <span className="info-user-balance">Bạn đang có: <strong> { props.userBalance } $</strong> </span>
    </div>
  );
}

const mapState = (state) => ({
  userBalance: state.user.userBalance
});

const mapDispatch = (dispatch) => ({
  setUserBalance: dispatch.user.setUserBalance
});

export default connect(mapState, mapDispatch)(UserInfo);