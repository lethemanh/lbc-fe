const UserMessage = (props) => {
  return (
    <div>
      <div className='chats-name'>{props.message.username}</div>
      <div className="text">{props.message.message}</div>
    </div>
  )
}

export default UserMessage;