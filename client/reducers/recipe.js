import { SET_RECIPE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPE:
      return action.ingredients
    default:
      return state
  }
}

export default reducer