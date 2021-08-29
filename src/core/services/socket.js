import Cookie from 'js-cookie';
import { io } from 'socket.io-client';

let socket;

function initConnection () {
  socket = io(process.env.REACT_APP_API_BASE_URL, {
    query: {
      token: Cookie.get('token')
    }
  });
}

export {
  initConnection,
  socket
};