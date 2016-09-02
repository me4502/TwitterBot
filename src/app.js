import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import controller from './controllers';
import http from 'http';
import path from 'path';
import browserify from 'browserify-middleware';
import sassMiddleware from 'node-sass-middleware';

const config = require('./config.json');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

app.use(logger('dev'));
app.use(bodyParser.json({
  limit: config.bodyLimit,
}));
app.use(controller(io));
app.use('/js', browserify(path.join(__dirname, 'client', 'js')));
app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'client', 'scss'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css',
  options: {
    include: [
      './bower_components/../',
    ],
  },
  force: true,
}));

// If none of the above routes hit
// Send 404
app.use((req, res) => {
  res.json({ oh: 'no' });
});

app.set('port', process.env.PORT || config.port);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client', 'views'));

server.listen(app.get('port'));

export default app;
