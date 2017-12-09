const VALID_COINS = [
  {
    type: 'nickle',
    weight: 5.0,
    value: 0.05,
    diameter: 21.21,
    thickness: 1.95,
    reeds: 0
  },
  {
    type: 'dime',
    weight: 2.268,
    value: 0.1,
    diameter: 17.91,
    thickness: 1.35,
    reeds: 118
  },
  {
    type: 'quarter',
    weight: 5.67,
    value: 0.25,
    diameter: 24.26,
    thickness: 1.75,
    reeds: 119
  },
  {
    type: 'half-dollar',
    weight: 11.34,
    value: 0.5,
    diameter: 30.61,
    thickness: 2.15,
    reeds: 150
  },
  {
    type: 'dollar',
    weight: 8.1,
    value: 1,
    diameter: 26.49,
    thickness: 2.0,
    reeds: 0
  }
]

const COIN_VALIDATION_FIELDS = ['weight', 'diameter', 'thickness', 'reeds']

export { COIN_VALIDATION_FIELDS, VALID_COINS }
