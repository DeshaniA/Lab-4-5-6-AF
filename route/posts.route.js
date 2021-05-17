const Router = require('koa-router');

const {createPost,getPosts,getPost,updatePost,removePost} = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});

router.get('/', async ctx => {
    ctx.body = await getPosts();
});

router.post('/', async ctx => {
    let post = ctx.request.body;
    post =await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getPost(id);
});

router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let post = ctx.request.body;

    post =await updatePost(id,post);
    ctx.body = post;
});

router.del('/id',async ctx=>{
    const id = ctx.params.id;
    ctx.response.status = 204;
    ctx.body = await removePost(id);

});
module.exports = router;