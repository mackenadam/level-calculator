import { combineReducers } from 'redux'

import fruits from './fruits'
import ingredients from './ingredients'
import recipe from './recipe'

export default combineReducers({
  fruits,
  ingredients,
  recipe
})
