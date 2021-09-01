import { MSGTYPE } from '../../../../core/constants/msgtype';

const Notification = (props) => {
  const renderNotification = () => {
    switch (props.type) {
      case MSGTYPE.CONNECT:
        return (<div className='chats-roomevent-join'>{props.username} vừa tham gia trò chơi!</div>);
      case MSGTYPE.DISCONNECT:
        return (<div className='chats-roomevent-left'>{props.username} vừa thoát trò chơi!</div>);
      case MSGTYPE.PLAYER_BET:
        return (<div className='chats-player-bet-event'>{props.message}</div>);
      default:
        return null;
    }
  }

  return (
    <div>
      {renderNotification()}
    </div>  
  );
}

export default Notification;