import express from 'express';
import bodyParser from 'body-parser';
import controller from './controllers';
import config from './config.json';

const app = express();


app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

app.use('/', controller());

app.listen(config.port);

console.log(`Started on port ${config.port}`);

export default app;
