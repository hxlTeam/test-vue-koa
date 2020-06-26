const Koa = require('koa');
const router = require('koa-router')();
const static = require('koa-static')   //静态资源服务插件
const path = require('path')           //路径管理

const app = new Koa();

// 配置静态资源
const staticPath = './dist'
app.use(static(
    path.join( __dirname, staticPath)
))

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
  async function fn() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(obj);
      }, 1000);
    })
  };
  // ctx.body = JSON.stringify(obj);
  ctx.body = await fn();
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