const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get('/hello/:name', async (ctx, next) => {
  let name = ctx.params.name;
  let obj = {
    name
  }
  ctx.set("Content-Type", "application/json");
  ctx.body = JSON.stringify(obj);
});

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});

// app.use(async (ctx,next)=>{
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello koa2</h1>';
// });

app.use(router.routes());
app.listen(3000);
console.log('http://localhost:3000');