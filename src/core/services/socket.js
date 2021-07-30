import { io } from 'socket.io-client';

let socket;

function initConnection () {
  socket = io(process.env.REACT_APP_API_BASE_URL);
}

export {
  initConnection,
  socket
};