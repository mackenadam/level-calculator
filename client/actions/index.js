import { getFruits } from '../apis/fruits'
import { addIngredientAPI, getIngredientsAPI } from '../apis/ingredients'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_INGREDIENTS = 'SET_INGREDIENTS'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits() {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}

export function fetchIngredients() {
  return dispatch => {
    console.log('Fetch action')
    return getIngredientsAPI()
      .then(ingredients => {
        dispatch(setIngredients(ingredients))
      })
  }
}

export function setIngredients(ingredients) {
  return {
    type: SET_INGREDIENTS,
    ingredients
  }
}

export function insertIngredient(newIngredient) {
  return dispatch => {
    return addIngredientAPI(newIngredient)
      .then(() => {
        getIngredientsAPI()
        .then(ingredients => {
          dispatch(setIngredients(ingredients))
        })
      })
  }
}