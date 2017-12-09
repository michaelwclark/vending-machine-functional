import { assert, expect } from 'chai'
import makeVendingMachine from './app'
// import { VALID_COINS } from '../config/valid-coins-config'

describe('makeVendingMachine', () => {
  it('should return an object', () => {
    let vendingMachine = makeVendingMachine()
    assert.isObject(vendingMachine)
  })
})

describe('acceptCoins', () => {
  it('should be a function', () => {
    let vendingMachine = makeVendingMachine()
    assert.isFunction(vendingMachine.acceptCoin)
  })
})
