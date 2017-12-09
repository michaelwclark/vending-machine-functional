const makeCoinAcceptor = coinValidator => coins =>
  coins.map(coinValidator).reduce((processedCoins, nextCoin) => {
    if (nextCoin.isValid) processedCoins.accepted.push(nextCoin)
    else processedCoins.rejected.push(nextCoin)
    return processedCoins
  },
  { accepted: [], rejected: [] })

const makeAcceptCoin = coinValidator => dispatch => coin => {
  const validCoin = coinValidator(coin)
  if (validCoin) {
    dispatch({ type: 'ACCEPT_COIN', payload: coin })
  } else {
    dispatch({ type: 'REJECT_COIN', payload: coin })
  }
}

const makeDispatch = (state = { inserted_value: 0 }) => action => {
  console.log(state, action)
  let reducer = {
    ACCEPT_COIN: (state, action) => {
      console.log('coin accepted')
      return { inserted_value: state.inserted_value + action.payload.value }
    },
    REJECT_COIN: (state, action) => {
      console.log('coin rejected')
      return state
    }
  }
  let next_state = reducer[action.type](state, action)
  console.log('reduced state', next_state)
  return next_state
}

export { makeAcceptCoin, makeDispatch }
