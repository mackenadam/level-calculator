import { combineReducers } from 'redux'

import ingredients from './ingredients'
import recipe from './recipe'

export default combineReducers({
  ingredients,
  recipe
})
