import { assert, expect } from 'chai'
import { makeDisplayMessage, makeResetDisplayMessage } from './display'

describe('makeDisplayMessage', () => {
  it('should return a function', () => {
    const displayMessage = makeDisplayMessage({})
    assert.isFunction(displayMessage)
  })

  it('should set vending machine display property', () => {
    const mockVendingMachine = { display: '' }
    const displayMessage = makeDisplayMessage(mockVendingMachine)
    const result = displayMessage('test')
    expect(result.display).to.eql('test')
  })

  it('should return vending machine object', () => {
    const mockVendingMachine = { display: '', test: 1 }
    const displayMessage = makeDisplayMessage(mockVendingMachine)
    const result = displayMessage('test')
    expect(result.display).to.eql('test')
    expect(result.test).to.eql(1)
  })
})

describe('makeResetDisplayMessage', () => {
  it('should return a function', () => {
    const resetDisplayMessage = makeResetDisplayMessage({})
    assert.isFunction(resetDisplayMessage)
  })

  it('should reset display on vending machine', () => {
    const mockVendingMachine = { display: 'test' }
    const resetDisplayMessage = makeResetDisplayMessage(mockVendingMachine)
    const result = resetDisplayMessage()
    expect(result.display).to.eql('')
  })

  it('should return a vending machine object', () => {
    const mockVendingMachine = { x: 1 }
    const resetDisplayMessage = makeResetDisplayMessage(mockVendingMachine)
    const result = resetDisplayMessage()
    expect(result.x).to.eql(1)
    expect(result.display).to.eql('')
  })
})
