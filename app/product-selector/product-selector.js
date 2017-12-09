const makeProductSelect = ({
  displayMessage,
  dispenseProduct,
  collectInputCoins
}) => (product, bankValue) => {
  if (bankValue >= product.price) {
    displayMessage('thank you')
    dispenseProduct(product)
    collectInputCoins(product.price)
  } else {
    displayMessage('insert coin')
  }
}

export { makeProductSelect }
