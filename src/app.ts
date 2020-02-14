import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { router } from './routes';

// Create Koa server
const app = new Koa();

// Parse body to json
app.use(bodyParser());

// Insert routes
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
export default app;
