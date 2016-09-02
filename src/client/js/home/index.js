const io = require('socket.io-client');
const socket = io.connect('http://localhost:8080');

function generateWS(){
  let method;
  if(location.host.startsWith('localhost') || location.host.startsWith('127.0.0.1')){
    method = 'ws://';
  } else {
    method = 'wss://';
  }
  return method + location.host;
};

const socketURI = generateWS();

socket.on('news', function (data) {
  console.log(data); // eslint-disable-line
  socket.emit('my other event', { my: 'data' });
});