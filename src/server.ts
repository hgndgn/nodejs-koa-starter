import app from './app';
import config from 'config';
import { log } from './utils/log';
import { promisify } from 'util';

const { host, port } = config.get('service');

(async () => {
  const server = app.listen(8080, 'localhost');

  log.info(
    `\nApp is running at ${host}:${port} in ${process.env.NODE_ENV} mode`
  );

  process.on('SIGTERM', async () => {
    log.info('SIGTERM received. Shutting down...');

    try {
      await promisify(server.close).call(server);
      log.info('Server has been stopped.');
      process.exit(0);
    } catch (err) {
      log.error('Error while shutting down...');
      process.exit(1);
    }
  });
})();
