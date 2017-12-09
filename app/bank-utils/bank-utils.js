const getBankValue = bank =>
  Object.keys(bank).reduce(
    (acc, cur) => acc + bank[cur].value * bank[cur].quantity,
    0
  )

const makeAddCoinToBank = bank => coin => {
  if (bank[coin.type]) {
    bank[coin.type].quantity += 1
  } else {
    bank[coin.type] = coin
    bank[coin.type].quantity = 1
  }
}

// const makeCheckInputCoinValue = (bank) => (val) => getBankValue(bank) >= val

export { makeAddCoinToBank, getBankValue }
