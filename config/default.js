const path = require('path')
import { COIN_VALIDATION_FIELDS, VALID_COINS } from './valid-coins-config'
module.exports = {
  APP_DIR: path.resolve('app'),
  APP_INDEX: path.resolve('app', 'static', 'index.html'),
  APP_PATH: path.resolve('app', 'app.js'),
  APP_STATIC_PATH: path.resolve('app', 'static'),
  BUILD_PATH: path.resolve('build'),
  COIN_VALIDATION_FIELDS,
  VALID_COINS,
  INVENTORY: [
    {
      name: 'Cola',
      price: 1,
      quantity: 48
    },
    {
      name: 'Chips',
      price: 0.5,
      quantity: 24
    },
    {
      name: 'Candy',
      price: 0.65,
      quantity: 32
    }
  ]
}
