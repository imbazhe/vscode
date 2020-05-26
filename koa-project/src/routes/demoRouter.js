import Router from 'koa-router'

import demoControl from '../api/demoControl'

const router = new Router()

router.get('/demo', demoControl.demo)

export default router