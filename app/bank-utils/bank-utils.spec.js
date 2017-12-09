import { expect, assert } from 'chai'
import { makeAddCoinToBank, getBankValue } from './bank-utils'

describe('makeAddCoinToBank', () => {
  it('should return a function', () => {
    let result = makeAddCoinToBank({})
    assert.isFunction(result)
  })

  it('should create new key if coin does not exist', () => {
    let bank = {}
    let addCoinToBank = makeAddCoinToBank(bank)
    addCoinToBank({ type: 'mock_nickle' })
    expect(bank.mock_nickle.quantity).to.eql(1)
  })

  it('should update quantity if coin does exist', () => {
    let bank = { mock_nickle: { quantity: 1 } }
    let addCoinToBank = makeAddCoinToBank(bank)
    addCoinToBank({ type: 'mock_nickle' })
    expect(bank.mock_nickle.quantity).to.eql(2)
  })
})

describe('getBankValue', () => {
  it('should return sum of value * qty  in bank', () => {
    const mock_bank = {
      dime: { value: 10, quantity: 3 }
    }
    const result = getBankValue(mock_bank)
    expect(result).to.eql(30)
  })

  it('should return sum of value * qty of multiple coins in bank ', () => {
    const mock_bank = {
      dime: { value: 10, quantity: 3 },
      non: { value: 10, quantity: 5 }
    }
    const result = getBankValue(mock_bank)
    expect(result).to.eql(80)
  })
})
