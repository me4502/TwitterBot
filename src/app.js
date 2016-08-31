import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import controller from './controllers';

const config = require('./config.json');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

app.use(controller());

// If none of the above routes hit
// Send 404
app.use((req, res) => {
  res.json({ oh: 'no' });
});

app.set('port', process.env.PORT || 8080);
app.listen(config.port);

export default app;
