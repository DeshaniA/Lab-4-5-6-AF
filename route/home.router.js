const Router = require('koa-router');
//serve = require('koa-static');
//Router.use(serve('public/'));

const router = new Router({
    prefix:'/home'
});
router.get('/',ctx=>{
    ctx.body = "Hello world!";
});

router.post('/', ctx => {
    ctx.body = 'Hello World';
});

module.exports =router;