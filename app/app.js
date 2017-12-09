import { makeAcceptCoin, makeDispatch } from './coin-acceptor'
import makeCoinValidator from './coin-validator'
import config from 'config'

const { COIN_VALIDATION_FIELDS, VALID_COINS } = config

const makeVendingMachine = () => {
  let coinValidator = makeCoinValidator({
    validCoins: VALID_COINS,
    validationFields: COIN_VALIDATION_FIELDS
  })
  return {
    acceptCoin: makeAcceptCoin(coinValidator)
  }
}

export default makeVendingMachine
