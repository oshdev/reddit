import { RequestHandler } from 'express'
import * as posts from './posts.json'

export const postsHandler: RequestHandler = (_, res) => {
  res.status(200).json(posts)
}
