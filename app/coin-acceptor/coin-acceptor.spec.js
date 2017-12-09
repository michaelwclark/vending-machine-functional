import { assert, expect } from 'chai'
import makeCoinAcceptor from './coin-acceptor'

describe('makeCoinAcceptor', () => {
  it('should return a function', () => {
    let result = makeCoinAcceptor(() => {}, () => {}, () => {})
    assert.isFunction(result)
  })

  it('acceptCoins should call accept function when validated true', () => {
    let acceptedCalled = false
    let acceptCallback = x => {
      assert.isTrue(x.isValid)
      acceptedCalled = true
    }
    let rejectCalled = false
    let rejectCallback = x => {
      assert.isFalse(x.isValid)
      rejectCalled = true
    }

    let acceptCoins = makeCoinAcceptor(
      x => {
        x['isValid'] = true
        return x
      },
      acceptCallback,
      rejectCallback
    )
    acceptCoins([{ c: 1 }, { c: 2 }])
    assert.isTrue(acceptedCalled)
    assert.isFalse(rejectCalled)
  })

  it('acceptCoins should call reject function when validated false', () => {
    let acceptedCalled = false
    let acceptCallback = x => {
      assert.isTrue(x.isValid)
      acceptedCalled = true
    }
    let rejectCalled = false
    let rejectCallback = x => {
      assert.isFalse(x.isValid)
      rejectCalled = true
    }

    let acceptCoins = makeCoinAcceptor(
      x => {
        x['isValid'] = false
        return x
      },
      acceptCallback,
      rejectCallback
    )
    acceptCoins([{ c: 1 }, { c: 2 }])
    assert.isFalse(acceptedCalled)
    assert.isTrue(rejectCalled)
  })
})
