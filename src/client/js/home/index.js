const io = require('socket.io-client');
const socket = io.connect(location.host);

socket.on('news', function (data) {
  console.log(data); // eslint-disable-line
  socket.emit('my other event', { my: 'data' });
});