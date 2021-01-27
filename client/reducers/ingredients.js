import { SET_INGREDIENTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return action.ingredients
    default:
      return state
  }
}

export default reducer