import React from 'react'
import { connect } from 'react-redux'

import { updateRecipe } from '../actions'

class RecipeIngredient extends React.Component {
  state = {
    ingredient: {
      ...this.props.ingredient
    }
  }

  handleChange = (event) => {
    this.setState({
      ingredient: {
        ...this.state.ingredient,
        weight: event.target.value
      }
    })
  }

  handleRemove = () => {}

  handleSave = () => {
    this.props.dispatch(updateRecipe(this.state.ingredient.id, this.state.ingredient.weight))
  }

  calculateByWeight = (component) => {
    let weight = this.state.ingredient.weight
    return ((component * weight) / 100).toFixed(1)
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
          {this.calculateByWeight(this.state.ingredient.energy)}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient.fat)}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient.carbohydrates)}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient.sugar)}
        </td>
        <td>
          {this.calculateByWeight(this.state.ingredient.protein)}
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
  return {}
}

export default connect(mapStateToProps)(RecipeIngredient)