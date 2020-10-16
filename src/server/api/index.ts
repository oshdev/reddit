import { Router } from 'express'
import { healthCheckHandler } from './healthcheck'
import { postsHandler } from '~server/api/posts'

export function createApiRouter(): Router {
  const router = Router()

  router.get('/healthcheck', healthCheckHandler)
  router.get('/posts', postsHandler)

  router.use((_, res) => {
    res.sendStatus(404)
  })

  return router
}
