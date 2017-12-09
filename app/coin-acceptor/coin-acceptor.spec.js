import { assert, expect } from 'chai'
import { makeAcceptCoin, makeDispatch } from './coin-acceptor'

// describe('makeCoinAcceptor', () => {
//   it('should return a function', () => {
//     let result = makeCoinAcceptor(() => true)
//     assert.isFunction(result)
//   })
//
//   it('acceptCoins should return an object with two arrays', () => {
//     let acceptCoins = makeCoinAcceptor(() => true)
//     let result = acceptCoins([])
//     expect(result.accepted).to.eql([])
//     expect(result.rejected).to.eql([])
//   })
//
//   it('acceptCoins should return array of accepted when validated true', () => {
//     let acceptCoins = makeCoinAcceptor(c => {
//       c['isValid'] = true
//       return c
//     })
//     let result = acceptCoins([{ c: 1 }, { c: 2 }])
//     expect(result.accepted).to.eql([
//       { c: 1, isValid: true },
//       { c: 2, isValid: true }
//     ])
//     expect(result.rejected).to.eql([])
//   })
//
//   it('acceptCoins should return array of rejected when validated false', () => {
//     let acceptCoins = makeCoinAcceptor(c => {
//       c['isValid'] = false
//       return c
//     })
//     let result = acceptCoins([{ c: 1 }, { c: 2 }])
//     expect(result.accepted).to.eql([])
//     expect(result.rejected).to.eql([
//       { c: 1, isValid: false },
//       { c: 2, isValid: false }
//     ])
//   })
// })

describe('make accept', () => {
  it('should preform', () => {
    const state = { inserted_value: 0 }
    const dispatch = makeDispatch(state)
    const coinValidator = c => c.value > 1
    const acceptCoin = makeAcceptCoin(coinValidator)(dispatch)
    acceptCoin({ value: 5 })
    acceptCoin({ value: 1 })
  })
})
