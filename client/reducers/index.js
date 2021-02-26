import { combineReducers } from 'redux'

import ingredients from './ingredients'
import recipe from './recipe'
import users from './users'

export default combineReducers({
  ingredients,
  recipe,
  users
})
