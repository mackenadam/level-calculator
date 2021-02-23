import { combineReducers } from 'redux'

import auth from './auth'
import ingredients from './ingredients'
import recipe from './recipe'

export default combineReducers({
  auth,
  ingredients,
  recipe
})
