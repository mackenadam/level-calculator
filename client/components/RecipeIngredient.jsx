import React from 'react'
import { connect } from 'react-redux'

import { removeRecipeIngredient, updateRecipe } from '../actions'

class RecipeIngredient extends React.Component {
  state = {
    ingredient: {
      ...this.props.ingredient
    }
  }

  handleChange = (event) => {
    let newWeight = event.target.value
    this.setState({
      ingredient: {
        ...this.state.ingredient,
        weight: newWeight
      }
    }, () => {
      let newEnergy = this.calculateByWeight(this.state.ingredient, 'energy')
      let newFat = this.calculateByWeight(this.state.ingredient, 'fat')
      let newCarbohydrates = this.calculateByWeight(this.state.ingredient, 'carbohydrates')
      let newSugar = this.calculateByWeight(this.state.ingredient, 'sugar')
      let newProtein = this.calculateByWeight(this.state.ingredient, 'protein')
      
      this.setState({
        ingredient: {
          ...this.state.ingredient,
          energy: newEnergy,
          fat: newFat,
          carbohydrates: newCarbohydrates,
          sugar: newSugar,
          protein: newProtein,
        }
      }, () => {this.props.dispatch(updateRecipe(this.state.ingredient))})
    })
  }

  handleRemove = () => {
    this.props.dispatch(removeRecipeIngredient(this.props.ingredient.id))
  }

  handleSave = () => {
    if (this.state.ingredient.weight == this.props.ingredient.weight) {
      alert('You haven\'t changed the weight...')
    } else {
      this.props.dispatch(updateRecipe(this.state.ingredient))
    }
  }

  filterIngredients = (id, array) => {
    return array.filter(obj => {
      return obj.id === id
    })
  }

  updateValues = () => {

  }

  calculateByWeight = (ingredient, name) => {
    let data = this.filterIngredients(ingredient.id, this.props.ingredients)
    if (data.length === 0) {
      return 0
    } else {
      let value = ((ingredient.weight * data[0][name]) / 100).toFixed(1)
      return value
    }
  }

  render () {
    return (
      <tr key={this.state.ingredient.id}>
        <td>
          {this.state.ingredient.name}
        </td>
        <td>
          <input type="number" name="weight" value={this.state.ingredient.weight} onChange={this.handleChange} />
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient, 'energy')}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient, 'fat')}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient, 'carbohydrates')}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient, 'sugar')}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient, 'protein')}
        </td>
        <td>
          <button onClick={this.handleSave}>Save</button>
        </td>
        <td>
          <button onClick={this.handleRemove}>Remove</button>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    ingredients: globalState.ingredients
  }
}

export default connect(mapStateToProps)(RecipeIngredient)