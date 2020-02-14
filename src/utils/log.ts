import bunyan from 'bunyan';
import config from 'config';

const { logLevel } = config.get('service');

export const log = bunyan.createLogger({
  level: logLevel,
  name: 'nodejs-koa-starter',
  stream: process.stdout
});
