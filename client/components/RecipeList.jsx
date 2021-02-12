import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions'

import RecipeIngredient from './RecipeIngredient'
import Totals from './Totals'

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipe())
  }



  render () {
    return (
      <div>
        <h1 className='section-header'>Recipe</h1>
        <table className='full-width'>
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
                // let data = this.filterIngredients(ingredient.id, this.props.ingredients)
                // console.log(data)
                return (
                  <RecipeIngredient key={ingredient.id} ingredient={ingredient} />
                ) 
              })
            }
          </tbody>
          <Totals />
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