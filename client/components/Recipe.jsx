import React from 'react'
import { connect } from 'react-redux'

class Recipe extends React.Component {

  state = {
    // recipeIngredients: globalState.recipeIngredients
  }

  render () {
    return (
      <>
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
            <tr>
              <td>Name</td>
              <td><input type="number" name="weight"/></td>
              <td>Cal</td>
              <td>Fat</td>
              <td>Carbs</td>
              <td>Sugar</td>
              <td>Protein</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    ingredients: globalState.ingredients,
    recipeIngredients: globalState.recipeIngredients
  }
}

export default connect(mapStateToProps)(Recipe)