import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { router } from './routes';

// Create Koa app instance
const app = new Koa();

// Middleware for parsing request body to a json object
app.use(bodyParser());

// Router middleware which dispatches a route matching the request
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
export default app;
