import { SET_USER } from '../actions'

const initialState = {
  id: 0,
  username: 'Guest'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}

export default reducer