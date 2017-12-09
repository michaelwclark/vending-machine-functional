/**
 *
 * @param coinValidator {Function} - function to validate a coin
 * @param acceptCoin {Function} - callback to accept coin
 * @param rejectCoin {Function} - callback to reject coin
 * @returns {Function} - takes array of coins, validates each one, returns object
 */
const makeCoinAcceptor = (coinValidator, acceptCoin, rejectCoin) => coin =>
  coinValidator(coin) ? acceptCoin(coin) : rejectCoin(coin)

export { makeCoinAcceptor }
