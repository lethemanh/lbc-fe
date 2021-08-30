import { connect } from "react-redux";
import UserMessage from "./UserMessage";
import Notification from "./Notification";
import { MSGTYPE } from '../../../../core/constants/msgtype';

const Message = (props) => {
  if (!props.message || !props.message.type) {
    return null;
  };
    switch(props.message.type) {
      case MSGTYPE.CHAT:
        return <UserMessage message={props.message}/>
      case MSGTYPE.CONNECT:
        return <Notification username={props.message.username} type={MSGTYPE.CONNECT}/>
      case MSGTYPE.DISCONNECT:
        return <Notification username={props.message.username} type={MSGTYPE.DISCONNECT}/>
      default:
        return null;
  }
}

  const mapState = (state) => ({
    userName: state.user.userName,
    userId: state.user.userId
  });
  
  export default connect(
    mapState
  )(Message);