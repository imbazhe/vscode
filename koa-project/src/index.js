import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import koaBody from 'koa-body'
import statics from 'koa-static'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'

import router from './routes/routes'


debugger
const app = new Koa()

// app.use(helmet())
// app.use(statics(path.join(__dirname,"../public")))
// app.use(router())

const middleware = compose([
  koaBody,
  statics(path.join(__dirname,"../public")),
  cors(),
  jsonUtil({ pretty:false , param:"pretty"}),
  helmet()
])

app.use(middleware)
app.use(router())


app.listen(3000)