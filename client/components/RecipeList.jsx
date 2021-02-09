import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions'

import RecipeIngredient from './RecipeIngredient'

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipe())
  }



  render () {
    return (
      <div>
        <h1>Recipe</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight</th>
              <th>Cal</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Sugar</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.recipe.map(ingredient => {
                return (
                  <RecipeIngredient key={ingredient.id} ingredient={ingredient} />
                ) 
              })
            }
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    ingredients: globalState.ingredients,
    recipe: globalState.recipe
  }
}

export default connect(mapStateToProps)(RecipeList)