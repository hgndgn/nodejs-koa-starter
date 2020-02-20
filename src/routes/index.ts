import Router from '@koa/router';
import { isEmpty } from 'lodash';
import { log } from '../utils/log';

export const router = new Router();

export const checkCredentials = (username: string, password: string) => {
  return !isEmpty(username) && !isEmpty(password);
};

router.get('/get', async ctx => {
  ctx.status = 200;
});

router.post('/post', async ctx => {
  const { username, password } = ctx.request.body;

  if (!checkCredentials(username, password)) {
    log.info('Please provide username and password in request body');
    ctx.status = 401;
    return;
  }

  log.info('Username:', username);
  log.info('Password:', password);

  const result = `You provided ${JSON.stringify({ username, password })}`;

  ctx.body = result;
  ctx.status = 200;
});
