const io = require('socket.io-client');
const vue = require('vue');

const socket = io.connect(location.host);

socket.on('news', function (data) {
  console.log(data); // eslint-disable-line
  socket.emit('my other event', { my: 'data' });
});

document.addEventListener("DOMContentLoaded", function(event) {
  new vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
    }
  });
});
