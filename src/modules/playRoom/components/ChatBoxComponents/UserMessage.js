import { connect } from 'react-redux';

const UserMessage = (props) => {
  if (!props.message || !props.message._id) {
    return null;
  }
  return (
    <div>
    { props.userId === props.message._id ?
      <div>
        <div className="text">{props.message.message}</div>
      </div>
      :
      <div>
        <div className='chats-name'>{props.message.username}</div>
        <div className="text">{props.message.message}</div>
      </div>
    }
    </div>
  )
}

const mapState = (state) => ({
  userId: state.user.userId
});

export default connect(
  mapState
)(UserMessage);