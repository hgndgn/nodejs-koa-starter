import Router from '@koa/router';
import { log } from '../utils/log';

export const router = new Router();

export const checkCredentials = (username: string, password: string) => {
  return !username && !password;
};

router.post('/', async ctx => {
  const { username, password } = ctx.request.body;

  if (!checkCredentials(username, password)) {
    log.info('Please provide username and password in request body');
    ctx.status = 401;
    return;
  }

  log.info('Username:', username);
  log.info('Password:', password);

  ctx.status = 200;
});
