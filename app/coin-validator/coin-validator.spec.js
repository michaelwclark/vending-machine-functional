import { assert, expect } from 'chai'
import * as coinValidator from './coin-validator'

describe('getEmptyValidationObject', () => {
  it('should return an object containing a key with an empty array value', () => {
    let result = coinValidator.getEmptyValidationObject(['a', 'b', 1])
    expect(result).to.have.property('a')
    expect(result).to.have.property('b')
    expect(result).to.have.property(1)
    expect(result.a).to.eql([])
    expect(result.b).to.eql([])
    expect(result['1']).to.eql([])
  })
})

describe('getValidationObject', () => {
  it('should return an object with same properties as emptyValidationObject', () => {
    let result = coinValidator.getValidationObject([], { a: [], b: [] })
    expect(result).to.have.property('a')
    expect(result).to.have.property('b')
    expect(result.a).to.eql([])
    expect(result.b).to.eql([])
  })

  it('should return an object with array of values from each object in validCoins', () => {
    let result = coinValidator.getValidationObject(
      [{ a: 1, b: 2 }, { a: 3, b: 4 }],
      { a: [], b: [] }
    )
    expect(result.a).to.eql([1, 3])
    expect(result.b).to.eql([2, 4])
  })
})

describe('makeCoinValidationFunction', () => {
  let validationObject = {
    a: [1, 2, 3, 4],
    b: [5, 6, 7, 8]
  }
  let validationFields = ['a', 'b']
  it('should return a function', () => {
    let validator = coinValidator.makeCoinValidationFunction({})
    assert.isFunction(validator)
  })

  it('should return true if all coin properties are valid', () => {
    let coin = { a: 1, b: 5 }
    let validator = coinValidator.makeCoinValidationFunction({
      validationObject,
      validationFields
    })
    let result = validator(coin)
    expect(result).to.be.true
  })

  it('should return false if any coin properties are not valid', () => {
    let coin = { a: -1, b: 5 }
    let validator = coinValidator.makeCoinValidationFunction({
      validationObject,
      validationFields
    })
    let result = validator(coin)
    expect(result).to.be.false
  })
})
