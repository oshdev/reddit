import { render } from '@testing-library/react'
import React from 'react'
import Posts, { Post } from './posts'

describe('posts listing', () => {
  it('should render posts', () => {
    const body = 'osh was here'
    const posts: Post[] = [{ body }]
    const { getByText } = render(<Posts posts={posts} />)
    expect(getByText(body)).not.toBeNull()
  })
})
