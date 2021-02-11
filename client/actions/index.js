import { getFruits } from '../apis/fruits'
import { addIngredientAPI, deleteIngredientAPI, getIngredientsAPI, updateIngredientAPI } from '../apis/ingredients'
import { getRecipeAPI, addRecipeIngredientAPI, removeRecipeIngredientAPI, updateRecipeAPI } from '../apis/recipe'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_INGREDIENTS = 'SET_INGREDIENTS'
export const SET_RECIPE = 'SET_RECIPE'

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

export function updateIngredient(id, ingredient) {
  return dispatch => {
    return updateIngredientAPI(id, ingredient)
      .then(() => {
        getIngredientsAPI()
          .then(ingredients => {
            dispatch(setIngredients(ingredients))
        })
      })
  }
}

export function setRecipe(ingredients) {
  return {
    type: SET_RECIPE,
    ingredients
  }
}

export function fetchRecipe() {
  return dispatch => {
    return getRecipeAPI()
      .then(ingredients => {
        dispatch(setRecipe(ingredients))
      })
  }
}

export function insertRecipeIngredient(newIngredient) {
  return dispatch => {
    return addRecipeIngredientAPI(newIngredient)
      .then(() => {
        getRecipeAPI()
          .then(ingredients => {
            dispatch(setRecipe(ingredients))
          })
      })
  }
}

export function removeRecipeIngredient(id) {
  return dispatch => {
    return removeRecipeIngredientAPI(id)
      .then(() => {
        getRecipeAPI()
          .then(ingredients => {
            dispatch(setRecipe(ingredients))
          })
      })
  }
}

export function updateRecipe(ingredient) {
  return dispatch => {
    updateRecipeAPI(ingredient)
      .then(() => {
        getRecipeAPI()
          .then(ingredients => {
            dispatch(setRecipe(ingredients))
          })
      })
  }
}