import React from 'react'
import { connect } from 'react-redux'

import { removeRecipeIngredient, updateRecipe } from '../actions'

class RecipeIngredient extends React.Component {
  state = {
    ingredient: {
      ...this.props.ingredient
    }
  }

  calculateByWeight = (id, weight, component) => {
    let data = this.filterIngredients(id, this.props.ingredients)
    if (data.length === 0) {
      return 0
    } else {
      let value = ((weight * data[0][component]) / 100).toFixed(1)
      return value
    }
  }

  filterIngredients = (id, array) => {
    return array.filter(obj => {
      return obj.id === id
    })
  }

  handleChange = (event) => {
    let ingredient = this.state.ingredient
    let newWeight = event.target.value

    this.setState({
      ingredient: {
        ...this.state.ingredient,
        weight: newWeight,
        energy: this.calculateByWeight(ingredient.id, newWeight, 'energy'),
        fat: this.calculateByWeight(ingredient.id, newWeight, 'fat'),
        carbohydrates: this.calculateByWeight(ingredient.id, newWeight, 'carbohydrates'),
        sugar: this.calculateByWeight(ingredient.id, newWeight, 'sugar'),
        protein: this.calculateByWeight(ingredient.id, newWeight, 'protein')
      }
    }, () => {
      this.props.dispatch(updateRecipe(this.state.ingredient))
    })
  }

  handleRemove = () => {
    this.props.dispatch(removeRecipeIngredient(this.props.ingredient.id))
  }

  render () {
    let ingredient = this.state.ingredient

    return (
      <tr key={ingredient.id}>
        <td>
          {ingredient.name}
        </td>
        <td className='table-input-td'>
          <input className='table-input' type="number" name="weight" value={this.state.ingredient.weight} onChange={this.handleChange} />
        </td>
        <td>
          {ingredient.energy}
        </td>
        <td>
          {ingredient.fat}
        </td>
        <td>
          {ingredient.carbohydrates}
        </td>
        <td>
          {ingredient.sugar}
        </td>
        <td>
          {ingredient.protein}
        </td>
        <td className='table-button-td'>
          <button className='table-button' onClick={this.handleRemove}>Remove</button>
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