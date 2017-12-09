import { expect, assert } from 'chai'
import { makeProductSelect } from './product-selector'

describe('makeProductSelect', () => {
  it('should return a function', () => {
    const productSelect = makeProductSelect({
      displayMessage: msg => {},
      dispenseProduct: product => {},
      collectInputCoins: amount => {}
    })

    assert.isFunction(productSelect)
  })

  it('should call display message with thank you when bank value more than product price', () => {
    let displayMessageCalled = false
    const productSelect = makeProductSelect({
      displayMessage: msg => {
        expect(msg).to.eql('thank you')
        displayMessageCalled = true
      },
      dispenseProduct: product => {},
      collectInputCoins: amount => {}
    })
    const mock_product = { price: 1 }
    productSelect(mock_product, 10)
    assert.isTrue(displayMessageCalled)
  })

  it('should call display message with insert coin when bank value not more than product price', () => {
    let displayMessageCalled = false
    const productSelect = makeProductSelect({
      displayMessage: msg => {
        expect(msg).to.eql('insert coin')
        displayMessageCalled = true
      },
      dispenseProduct: product => {},
      collectInputCoins: amount => {}
    })
    const mock_product = { price: 100 }
    productSelect(mock_product, 10)
    assert.isTrue(displayMessageCalled)
  })

  it('should call dispenseProduct when bank value more than product price', () => {
    let dispenseProductCalled = false
    const mock_product = { price: 1 }

    const productSelect = makeProductSelect({
      displayMessage: msg => {},
      dispenseProduct: product => {
        expect(product).to.eql(mock_product)
        dispenseProductCalled = true
      },
      collectInputCoins: amount => {}
    })
    productSelect(mock_product, 10)
    assert.isTrue(dispenseProductCalled)
  })

  it('should call collectInputCoins when bank value more than product price', () => {
    let collectInputCoinsCalled = false
    const mock_product = { price: 1 }

    const productSelect = makeProductSelect({
      displayMessage: msg => {},
      dispenseProduct: product => {},
      collectInputCoins: amount => {
        expect(amount).to.eql(mock_product.price)
        collectInputCoinsCalled = true
      }
    })
    productSelect(mock_product, 10)
    assert.isTrue(collectInputCoinsCalled)
  })
})
