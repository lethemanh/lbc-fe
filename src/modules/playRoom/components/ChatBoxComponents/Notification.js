import { MSGTYPE } from '../../../../core/constants/msgtype';

const Notification = (props) => {
  return (
    <div>
      { props.type && props.type === MSGTYPE.CONNECT
        ? <div className='chats-roomevent-join'>{props.username} vừa tham gia trò chơi!</div>
        : (props.type && props.type === MSGTYPE.DISCONNECT
          ? <div className='chats-roomevent-left'>{props.username} vừa thoát trò chơi!</div>
          : null 
        )
      }
    </div>  
  )
}

export default Notification;