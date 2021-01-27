import { getFruits } from '../apis/fruits'
import { getIngredients } from '../apis/ingredients'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_INGREDIENTS = 'SET_INGREDIENTS'

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

export function fetchIngredients () {
  return dispatch => {
    return getIngredients()
      .then(ingredients => {
        dispatch(setIngredients(ingredients))
      })
  }
}

export function setIngredients (ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients
  }
}