import { Router } from 'express';
// import { version } from '../../package.json';

function socketConnect(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', data => console.log(data)); // eslint-disable-line
}

export default (io) => {
  const controller = new Router();

  controller.get('/', (req, res) => {
    res.json({ cat: 'dog' }); // eslint-disable-line
  });

  controller.get('/hello', (req, res) => {
    res.json({ message: 'hello' });
  });

  controller.get('/home', (req, res) => {
    res.render('home', { url: req.originalUrl });
  });

  io.on('connection', socketConnect);

  return controller;
};
