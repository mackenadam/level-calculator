import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions'

class Recipe extends React.Component {

  state = {
    weightInput: 0
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipe())
  }

  handleChange = (event) => {
    console.log(event.target)
    this.setState({
      weightInput: event.target.value
    })
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
                  <tr key={ingredient.id}>
                    <td>{ingredient.name}</td>
                    <td><input type="number" name="weight" value={this.state.weightInput} onChange={this.handleChange} /></td>
                    <td>{ingredient.energy}</td>
                    <td>{ingredient.fat}</td>
                    <td>{ingredient.carbohydrates}</td>
                    <td>{ingredient.sugar}</td>
                    <td>{ingredient.protein}</td>
                  </tr>
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

export default connect(mapStateToProps)(Recipe)