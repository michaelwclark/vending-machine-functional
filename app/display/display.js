const makeDisplayMessage = VendingMachineState => msg =>
  Object.assign(VendingMachineState, { display: msg })

const makeResetDisplayMessage = VendingMachineState => () =>
  Object.assign(VendingMachineState, { display: '' })

export { makeDisplayMessage, makeResetDisplayMessage }
