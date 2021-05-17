const Koa = require('koa');
require('./dal');
const HomeRoutes = require('./route/home.router');
const PostRoutes = require('./route/posts.route');
const bodyParser = require('koa-bodyparser');

const app =new Koa();
app.use(bodyParser());
app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());
app.listen(3000);