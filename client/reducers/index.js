import { combineReducers } from 'redux'

import ingredients from './ingredients'
import recipe from './recipe'
import user from './user'

export default combineReducers({
  ingredients,
  recipe,
  user
})
