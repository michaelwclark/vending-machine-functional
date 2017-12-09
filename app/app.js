import makeAcceptCoins from './coin-acceptor'
import makeCoinValidator from './coin-validator'
import config from 'config'

const { COIN_VALIDATION_FIELDS, VALID_COINS } = config

const makeVendingMachine = () => {
  let coinValidator = makeCoinValidator({
    validCoins: VALID_COINS,
    validationFields: COIN_VALIDATION_FIELDS
  })
  const state = {
    coin_bank: {},
    inventory: {},
    display: {},
    buttons: {},
    coin_return: {}
  }
  const addCoinToBank = coin => state.coin_bank.push(coin)
  const sendCoinToReturn = coin => state.coin_return.push(coin)

  return {
    acceptCoins: makeAcceptCoins(
      coinValidator,
      addCoinToBank,
      sendCoinToReturn
    ),
    addCoinToBank,
    sendCoinToReturn,
    state
  }
}

export default makeVendingMachine
