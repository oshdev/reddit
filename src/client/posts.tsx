import React, { FC } from 'react'

export interface Post {
  body: string
}

interface PostsProps {
  posts: Post[]
}

const Posts: FC<PostsProps> = ({ posts }) => (
  <>{posts.map(({ body }, index) => <article key={index}>{body}</article>)}</>
)

export default Posts
