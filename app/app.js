import { makeCoinAcceptor, makeAddCoinToBank } from './coin-acceptor'
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
    coin_register: {},
    coin_return: {},
    inventory: {},
    display: {},
    buttons: {}
  }

  const addCoinToBank = makeAddCoinToBank(state.coin_bank)

  const sendCoinToReturn = coin => {
    state.coin_return.push(coin)
  }
  const acceptCoin = makeCoinAcceptor(
    coinValidator,
    addCoinToBank,
    sendCoinToReturn
  )
  return {
    acceptCoin,
    state
  }
}

export default makeVendingMachine
