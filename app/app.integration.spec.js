import { assert, expect } from 'chai'
import makeVendingMachine from './app'
import { VALID_COINS } from '../config/valid-coins-config'

describe('makeVendingMachine', () => {
  it('should do something', () => {
    const vendingMachine = makeVendingMachine()

    vendingMachine.acceptCoin(VALID_COINS[0])

    // expect(vendingMachine.state.coin_bank.length).to.eql(VALID_COINS.length)
  })

  it('is a test', () => {
    // clear out array outside fn

    const makeCheckVal = bank => val => bank.value > val
    let mockBank = { value: 100 }
    const checkVal = makeCheckVal(mockBank)
    let result1 = checkVal(2)
    expect(result1).to.eql(true)
    mockBank.value = 1
    let result2 = checkVal(2)
    expect(result2).to.eql(false)
  })
})
