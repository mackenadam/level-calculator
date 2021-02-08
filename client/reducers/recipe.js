import { SET_RECIPE } from '../actions'

const initialState = []

// const initialState = [{
//   id: 1,
//   name: 'Bean Supreme Sausages',
//   energy: 579,
//   fat: 6.6,
//   carbohydrates: 4.6,
//   sugar: 3.5,
//   protein: 12.2
// },
// {
//   id: 2,
//   name: 'Not Sausages',
//   energy: 479,
//   fat: 6.9,
//   carbohydrates: 6.6,
//   sugar: 5.5,
//   protein: 12.7
// }]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPE:
      return action.ingredients
    default:
      return state
  }
}

export default reducer