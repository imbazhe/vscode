const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const koaCors = require('@koa/cors')
const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', ctx => {
  console.log(ctx.request)
  ctx.body = 'hello world'
})

// get方法的params
router.get('/getParams', ctx => {
  const params = ctx.request.query
  console.log(params)
  console.log(params.name, params.age)
  console.log(ctx.request)
  ctx.body = {
    "name":params.name,
    "age":params.age
  }
})

router.post('/post', ctx => {
  const { body } = ctx.request
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    ...body
  }
})


app.use(koaBody())
app.use(koaCors())
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)