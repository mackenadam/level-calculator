import { getFruits } from '../apis/fruits'
import { addIngredientAPI, deleteIngredientAPI, getIngredientsAPI, updateIngredientAPI } from '../apis/ingredients'

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

export function destroyIngredient(id) {
  return dispatch => {
    return deleteIngredientAPI(id)
      .then(() => {
        getIngredientsAPI()
          .then(ingredients => {
            dispatch(setIngredients(ingredients))
        })
      })
  }
}

export function updateIngredient(id) {
  return dispatch => {
    return updateIngredientAPI(id)
      .then(() => {
        getIngredientsAPI()
          .then(ingredients => {
            dispatch(setIngredients(ingredients))
        })
      })
  }
}