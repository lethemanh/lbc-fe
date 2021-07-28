import { SendOutlined } from '@ant-design/icons';;

const ChatBox = () => {
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
            <div className="chats-client">
              <strong>nddmanh</strong> vừa đặt cược <strong>100$</strong> vào
              <strong>Cua</strong>
            </div>
            <div className="chats-self">
              <strong>Bạn</strong> vừa đặt cược <strong>200$</strong> vào
              <strong>Bầu</strong>
            </div>
          </div>
        </div>
        <form className="noti-box-form">
          <input type="text" placeholder="Enter Message" />
          <button type="submit" className="noti-box-form-btn-send">
            <SendOutlined className="noti-box-form-btn-send-icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBox;
