import { router } from 'express';
import { version } from '../../package.json';

export default () => {
  const controller = router();

  controller.get('/', (req, res) => {
    res.json({ version });
  });

  controller.get('/hello', (req, res) => {
    res.json({ message: 'hello' });
  });

  return controller;
};
