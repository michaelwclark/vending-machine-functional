const getEmptyValidationObject = validationFields => {
  let emptyValidationObj = {}
  validationFields.forEach(key => (emptyValidationObj[key] = []))
  return emptyValidationObj
}

const getValidationObject = (validCoins, emptyValidationObject) => {
  let validationFields = Object.keys(emptyValidationObject)
  return validCoins.reduce((validValues, cur) => {
    validationFields.forEach(field => validValues[field].push(cur[field]))
    return validValues
  }, emptyValidationObject)
}

const makeCoinValidatonFunction = ({
  validationObject,
  validationFields
}) => coin => {
  return validationFields.reduce((isValid, property) => {
    if (isValid === false) return isValid
    return validationObject[property].includes(coin[property])
  }, true)
}

const makeCoinValidator = ({ validCoins, validationFields }) => {
  let emptyValidationObject = getEmptyValidationObject(validationFields)
  let validationObject = getValidationObject(validCoins, emptyValidationObject)
  return makeCoinValidatonFunction({ validationObject, validationFields })
}

export default makeCoinValidator
export {
  makeCoinValidator,
  makeCoinValidatonFunction,
  getEmptyValidationObject,
  getValidationObject
}
