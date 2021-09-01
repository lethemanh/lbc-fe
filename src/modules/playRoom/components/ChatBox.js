import { SendOutlined } from '@ant-design/icons';
import { socket } from '../../../core/services/socket';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import convertResult from '../../../core/helper/convertResult';
import Message from './ChatBoxComponents/Message';
import { MSGTYPE } from '../../../core/constants/msgtype';

const ChatBox = (props) => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const messageEnd = useRef(null);

  useEffect(() => {
    socket.on('chat-message', (message) => {
      addMsgToMsgList(message);
    });
    socket.on('broadcast-bet', (betData) => {
      const message = {
        _id: betData.userId,
        message: `${betData.username} đã đặt cược ${convertResult(betData.choice)?.value} ${betData.amount}$`,
        type: MSGTYPE.PLAYER_BET
      }
      addMsgToMsgList(message);
    });
    socket.on('connect-success', (message) => {
      addMsgToMsgList(message);
    });
    socket.on('disconnect-success', (message) => {
      addMsgToMsgList(message);
    });
    return function cleanup() {
      socket.off('chat-message');
    }
  }, []);

  function addMsgToMsgList (message) {
      let temp = messageList;
      temp.push(message);
      setMessageList([...temp])
      scrollToBottom();
  }

  function scrollToBottom () {
    messageEnd.current.scrollIntoView();
  }

  function submitMessage (e) {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', {
        _id : props.userId,
        username: props.userName,
        message: message,
        type: MSGTYPE.CHAT
      });
      setMessage('');
    }
  }

  return (
    <div className="noti">
      <div className="noti-box">
        <div className="noti-box-client">
          <div className="noti-box-client-info">
            <h2>THÔNG BÁO</h2>
          </div>
        </div>
        <div className="scroll">
          <div className="chats">
            {
              messageList.map((message, index) => {
                return <div className={message._id === props.userId ? 'chats-self' : 'chats-client'} key={index}>
                  <Message message={message}/>
              </div>
              })
            }
            <div ref={messageEnd}></div>
          </div>
        </div>
        <form className="noti-box-form" onSubmit={(e) => submitMessage(e)}>
          <input type="text" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type="submit" className="noti-box-form-btn-send">
            <SendOutlined className="noti-box-form-btn-send-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
  userId: state.user.userId
});

export default connect(
  mapState
)(ChatBox);