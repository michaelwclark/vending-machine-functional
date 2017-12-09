/**
 * getEmptyValidationObject
 * @param validationFields {array} - Fields to validate on a coin object
 * @returns {object} - Object keyed with each validation field and empty arrays as values.
 */
const getEmptyValidationObject = validationFields => {
  let emptyValidationObj = {}
  validationFields.forEach(key => (emptyValidationObj[key] = []))
  return emptyValidationObj
}

/**
 *
 * @param validCoins {array} - Array of valid coin objects
 * @param emptyValidationObject {object} - Object keyed with each validation field and empty arrays as values.
 * @returns {object} - Validation object populated with valid values for each coin validation field
 */
const getValidationObject = (validCoins, emptyValidationObject) => {
  let validationFields = Object.keys(emptyValidationObject)
  return validCoins.reduce((validValues, cur) => {
    validationFields.forEach(field => validValues[field].push(cur[field]))
    return validValues
  }, emptyValidationObject)
}

/**
 *
 * @param validationObject {object} -  Validation object populated with valid values for each coin validation field
 * @param validationFields {array} - Array of field names to validate on a coin
 * @returns {Function} - function that takes coin object and returns true if valid
 */
const makeCoinValidationFunction = ({
  validationObject,
  validationFields
}) => coin => {
  return validationFields.reduce((isValid, property) => {
    if (isValid === false) return isValid
    return validationObject[property].includes(coin[property])
  }, true)
}

/**
 *
 * @param validCoins - Config object containing valid coins descriptions
 * @param validationFields - Fields that each coin should be validated on
 * @returns {Function} - CoinValidationFunction - takes coin, returns true/false
 */
const makeCoinValidator = ({ validCoins, validationFields }) => {
  let emptyValidationObject = getEmptyValidationObject(validationFields)
  let validationObject = getValidationObject(validCoins, emptyValidationObject)
  return makeCoinValidationFunction({ validationObject, validationFields })
}

export default makeCoinValidator
export {
  makeCoinValidator,
  makeCoinValidationFunction,
  getEmptyValidationObject,
  getValidationObject
}
