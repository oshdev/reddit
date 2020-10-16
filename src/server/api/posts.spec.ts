import { mockFn, mockObj } from '~shared/test-helpers'
import { postsHandler } from './posts'
import { Request, Response, NextFunction } from 'express'

describe('posts', () => {
  function createTestDeps() {
    const doubleReq = mockObj<Request>({})
    const doubleRes = mockObj<Response>({ status: jest.fn(), json: jest.fn() })
    const doubleNext = mockFn<NextFunction>()
    return {
      dummyReq: doubleReq,
      spyRes: doubleRes,
      stubRes: doubleRes,
      dummyNext: doubleNext,
    }
  }

  it('returns a successful response', () => {
    const { dummyReq, spyRes, dummyNext } = createTestDeps()
    spyRes.status.mockReturnThis()

    postsHandler(dummyReq, spyRes, dummyNext)

    expect(spyRes.status).toBeCalledWith(200)
    expect(spyRes.json.mock.calls[0]).toBeCalledWith('Nice stuff!')
  })
})
