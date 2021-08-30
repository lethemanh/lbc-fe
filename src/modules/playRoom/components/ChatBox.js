import { SendOutlined } from '@ant-design/icons';
import { socket } from '../../../core/services/socket';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import Message from './ChatBoxComponents/Message';
import { MSGTYPE } from '../../../core/constants/msgtype';

const ChatBox = (props) => {
  const [message, setMessage] = useState('');
  const messageEnd = useRef(null);

  function scrollToBottom () {
    messageEnd.current.scrollIntoView();
  }

  function submitMessage (e) {
    e.preventDefault();
    if (message.trim()) {
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